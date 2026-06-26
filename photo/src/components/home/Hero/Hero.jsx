import { motion } from  "framer-motion";
import "./Hero.css";

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

        <motion.p
    className="hero-subtitle"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
>
          Wedding • Pre-Wedding • Birthday • Events
        </motion.p>

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
          Crafting timeless memories through cinematic storytelling and
          heartfelt photography.
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
            Book Your Story
          </button>

        </motion.div>
        </motion.div>

      {/* Scroll Indicator */}
      <motion.div
    className="scroll-indicator"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4 }}
>

        <span></span>

        </motion.div>

  <div className="hero-image">

    <div className="image-card">

      {/* Hero Image Goes Here */}

    </div>

  </div>

</div>
    </section>
  );
}

export default Hero;