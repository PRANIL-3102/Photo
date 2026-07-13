import "./GalleryManager.css";
import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";
import supabase from "../../services/supabase";

function GalleryManager() {

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [images, setImages] = useState([]);

    async function fetchImages() {

        const { data, error } = await supabase
            .from("gallery")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) {

            console.log(error);
            return;

        }

        setImages(data);

    }

    useEffect(() => {

        fetchImages();

    }, []);

    async function handleUpload() {

        if (!file) {

            setMessage("Please choose an image.");
            return;

        }

        try {

            setUploading(true);
            setMessage("");

            const compressedFile = await imageCompression(file, {
                maxSizeMB: 8,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            });

            const fileName = `${Date.now()}-${compressedFile.name}`;

            const { error: uploadError } = await supabase.storage
                .from("gallery")
                .upload(fileName, compressedFile);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage
                .from("gallery")
                .getPublicUrl(fileName);

            const imageUrl = data.publicUrl;

            const { error: dbError } = await supabase
                .from("gallery")
                .insert([
                    {
                        image_url: imageUrl,
                        caption: compressedFile.name,
                    },
                ]);

            if (dbError) throw dbError;

            await fetchImages();

            setMessage("✅ Image uploaded successfully!");

            setFile(null);

        } catch (err) {

            console.error(err);

            setMessage(err.message);

        } finally {

            setUploading(false);

        }

    }

    return (

        <section className="gallery-manager">

            <h1>Gallery Manager</h1>

            <p>Upload new gallery images.</p>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button
                onClick={handleUpload}
                disabled={uploading}
            >

                {uploading ? "Uploading..." : "Upload Image"}

            </button>

            {message && (

                <p className="message">{message}</p>

            )}

            <div className="gallery-list">

                {

                    images.length === 0

                    ?

                    <p>No images uploaded yet.</p>

                    :

                    images.map((image) => (

                        <div
                            key={image.id}
                            className="gallery-item"
                        >

                            <img
                                src={image.image_url}
                                alt={image.caption}
                            />

                            <p>{image.caption}</p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default GalleryManager;