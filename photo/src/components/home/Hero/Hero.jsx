import { motion } from  "framer-motion";
import "./Hero.css";
import heroImage from "../../../assets/images/ag.png";

function Hero() {
  const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
  return (

    <section className="hero">
<div className="hero-bg"></div>
      {/* Hero Content */}
      <div className="hero-container">

  <motion.div className="hero-content">

<motion.div
    className="hero-badge"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
>
    Trusted for Weddings • Love Stories • Celebrations
</motion.div>

        <motion.h1
    className="hero-title"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: .3 }}
>
          Every Frame Holds
          <br />
          A Forever Memory.
          <br />
        </motion.h1>

        <p className="hero-description">
          From wedding vows to birthday laughter, every celebration deserves to be
          remembered with honesty, emotion, and timeless artistry.
        </p>

        <motion.div
    className="hero-buttons"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: .9 }}
>

          <button className="explore-btn">
            Explore Stories
          </button>

          <button className="book-btn">
            Book Your Session →
          </button>

        </motion.div>
        </motion.div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
      <div className="mouse">
        <span></span>
      </div>
        </div>

  <motion.div
    className="image-card"
    initial={{opacity:0,x:60}}
    animate={{opacity:1,x:0}}
    transition={{
        delay:.5,
        duration:1
    }}
>

    <div className="image-card">
    <img
        src={heroImage}
        alt="PhotographerVaiya Hero"
    />
</div>

  </motion.div>

</div>
    </section>
  );
}

export default Hero;