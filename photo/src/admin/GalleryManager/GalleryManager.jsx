import "./GalleryManager.css";
import { useState } from "react";
import imageCompression from "browser-image-compression";
import supabase from "../../services/supabase";

function GalleryManager() {

    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");

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

                    }

                ]);

            if (dbError) throw dbError;

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

                {

                    uploading

                    ?

                    "Uploading..."

                    :

                    "Upload Image"

                }

            </button>

            {

                message &&

                <p className="message">

                    {message}

                </p>

            }

        </section>

    );

}

export default GalleryManager;