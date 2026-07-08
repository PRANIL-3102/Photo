import "./FeaturedStory.css";
import storyImage from "../../../assets/images/s1.png";

function FeaturedStory() {
  return (
    <section className="featured-story">

      <div className="story-container">

        <div className="story-image">
    <img
        src={storyImage}
        alt="Featured Wedding Story"
    />
        </div>

        <div className="story-content">

          <p className="story-label">
            A Story We Captured
          </p>

          <h2>
            Ayan & Sneha
          </h2>

          <h3>
            A Wedding to Remember
          </h3>

          <p className="story-description">
            Every wedding tells a different story.
            From heartfelt smiles to unforgettable emotions,
            every frame preserves a memory that lasts forever.
          </p>

<a href="#" className="story-link">
    View Their Story
    <span>→</span>
</a>

        </div>

      </div>

    </section>
  );
}

export default FeaturedStory;