import "./Booking.css";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FiInstagram } from "react-icons/fi";

function Booking() {
  return (
    <section id="contact" className="booking">

      <div className="booking-content">

        <p className="section-label">
          LET'S CONNECT
        </p>

        <h2>
          Let's Tell
          <br />
          Your Story.
        </h2>

        <p className="booking-text">
          Every celebration deserves to be remembered beautifully.
          Whether it's your wedding, pre-wedding, birthday or any
          special event, PhotographerVaiya is ready to capture
          every unforgettable moment.
        </p>

        <a
          href="https://wa.me/917679148499"
          target="_blank"
          rel="noopener noreferrer"
          className="booking-btn"
        >
          Book On WhatsApp →
        </a>

      </div>

      <div className="contact-grid">
<a
  href="tel:+917679148499"
  className="contact-card"
>

  <HiOutlinePhone />

  <h3>Call</h3>

  <p>+91 76791 48499</p>

</a>
<a
  href="mailto:photographervaiya45@gmail.com"
  className="contact-card"
>

  <HiOutlineEnvelope />

  <h3>Email</h3>

  <p>photographervaiya45@gmail.com</p>

</a>

<a
    href="https://instagram.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card"
>
    <FiInstagram />

    <h3>Instagram</h3>

    <p>Follow Our Journey</p>

</a>

        <div className="contact-card">

          <HiOutlineMapPin />

          <h3>Location</h3>

          <p>Bankura, West Bengal, India</p>

        </div>

      </div>

    </section>
  );
}

export default Booking;