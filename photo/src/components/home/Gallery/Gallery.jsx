import "./Gallery.css";
import { motion } from "framer-motion";
import {
    fadeUp,
    staggerContainer
} from "../../../utils/motion";
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
<motion.section

id="gallery"

className="gallery"

variants={fadeUp}

initial="hidden"

whileInView="show"

viewport={{ once: true, amount: 0.2 }}

>
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
<motion.div

className="gallery-grid"

variants={staggerContainer}

initial="hidden"

whileInView="show"

viewport={{ once: true }}

>
{
gallery.map((item,index)=>(
<motion.div

key={index}

className="gallery-card"

variants={fadeUp}
>
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
</motion.div>
))
}
</motion.div>
</motion.section>
    )
}
export default Gallery;