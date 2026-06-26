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

      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Video Source */}
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
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
          Not Every Moment
          <br />
          Lasts Forever.
          <br />
          But Every Memory Can.
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

    </section>
  );
}

export default Hero;