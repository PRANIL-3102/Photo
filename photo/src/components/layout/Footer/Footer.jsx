import "./Footer.css";
import {
  FiInstagram,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>
            Photographer
            <span>Vaiya</span>
          </h2>

          <p>
            Capturing Stories Forever
          </p>

        </div>

        <div className="footer-social">

          <a
            href="https://wa.me/917679148499"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>

          <a
            href="mailto:photographervaiya45@gmail.com"
          >
            <FiMail />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 PhotographerVaiya.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by
          <span> Pranil Singha Mahapatra</span>
        </p>

      </div>

    </footer>

  );

}

export default Footer;