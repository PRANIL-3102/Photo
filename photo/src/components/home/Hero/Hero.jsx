import "./Hero.css";

function Hero() {
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
      <div className="hero-content">

        <p className="hero-subtitle">
          Wedding • Pre-Wedding • Birthday • Events
        </p>

        <h1 className="hero-title">
          Not Every Moment
          <br />
          Lasts Forever.
          <br />
          But Every Memory Can.
        </h1>

        <p className="hero-description">
          Crafting timeless memories through cinematic storytelling and
          heartfelt photography.
        </p>

        <div className="hero-buttons">

          <button className="explore-btn">
            Explore Stories
          </button>

          <button className="book-btn">
            Book Your Story
          </button>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">

        <span></span>

      </div>

    </section>
  );
}

export default Hero;