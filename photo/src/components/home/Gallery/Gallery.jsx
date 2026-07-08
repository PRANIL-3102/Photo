import "./Gallery.css";

import img1 from "../../../assets/images/ab.jpeg";
import img2 from "../../../assets/images/ac.png";
import img3 from "../../../assets/images/ak.jpeg";
import img4 from "../../../assets/images/am.png";
import img5 from "../../../assets/images/at.png";
import img6 from "../../../assets/images/au.png";

const gallery = [

    {
        image:img1,
        title:"Wedding Story"
    },

    {
        image:img2,
        title:"Pre Wedding"
    },

    {
        image:img3,
        title:"Birthday"
    },

    {
        image:img4,
        title:"Reception"
    },

    {
        image:img5,
        title:"Baby Shower"
    },

    {
        image:img6,
        title:"Special Moments"
    }
];
function Gallery(){
    return(
<section
id="gallery"
className="gallery">
<div className="gallery-header">
<p className="section-label">
OUR GALLERY
</p>
<h2>
Every Frame
<br />
Has A Story.
</h2>
</div>
<div className="gallery-grid">
{
gallery.map((item,index)=>(
<div
key={index}
className="gallery-card">
<img
src={item.image}
alt={item.title}
/>
<div className="gallery-overlay">
<h3>{item.title}</h3>
<span>
View →
</span>
</div>
</div>
))
}
</div>
</section>
    )
}
export default Gallery;