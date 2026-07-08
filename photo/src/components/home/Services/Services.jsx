import "./Services.css";

import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineGift,
  HiOutlineCamera,
} from "react-icons/hi2";

function Services() {
return (
    <section className="services">

    <div className="services-header">

        <p className="section-label">
        WHAT WE CAPTURE
        </p>
        <h2>
        Every Celebration
        <br />
        Has A Story.
        </h2>
    </div>
    <div className="services-grid">

        <div className="service-card">

        <div className="service-icon">
            <HiOutlineSparkles />
        </div>

        <h3>Wedding Stories</h3>

        <p>
            Elegant wedding photography that preserves every emotion,
            every smile and every unforgettable promise.
        </p>

        <a href="#">
            Explore →
        </a>
        </div>
        <div className="service-card">
        <div className="service-icon">
            <HiOutlineHeart />
        </div>
        <h3>Pre-Wedding</h3>
        <p>
            Beautiful moments before the big day,
            captured naturally with timeless elegance.
        </p>
        <a href="#">
            Explore →
        </a>
        </div>
        <div className="service-card">
        <div className="service-icon">
            <HiOutlineGift />
        </div>
        <h3>Birthday Celebrations</h3>
        <p>
            From first birthdays to milestone celebrations,
            every smile deserves to be remembered.
        </p>
        <a href="#">
            Explore →
        </a>
        </div>
        <div className="service-card">
        <div className="service-icon">
            <HiOutlineCamera />
        </div>
        <h3>Events</h3>
        <p>
            Corporate events, family gatherings,
            cultural programs and every special occasion.
        </p>
        <a href="#">
            Explore →
        </a>
        </div>
    </div>
    </section>
  );
}
export default Services;