import { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
    <h2>
        Photographer
        <span>Vaiya</span>
    </h2>

    <p>Capturing Stories Forever</p>
</div>

        <div className="nav-links">
          <ul>
  <li>Home</li>
  <li>Stories</li>
  <li>Services</li>
  <li>About</li>
  <li>Contact</li>
          </ul>
        </div>

      <div className="nav-btn">
  <button>
    Book Your Story
    <span>→</span>
  </button>
</div>

<div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <HiOutlineMenuAlt3 />
</div>

<AnimatePresence>
  {menuOpen && (
    <>
      <motion.div
        className="overlay"
        onClick={() => setMenuOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="mobile-menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <HiOutlineX />
        </div>

        <div className="mobile-logo">
          <h2>
            Photographer
            <span>Vaiya</span>
          </h2>
          <p>Capturing Stories Forever</p>
        </div>

        <ul className="mobile-links">
          <li>Home</li>
          <li>Stories</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="mobile-btn">
          Book Your Story →
        </button>
      </motion.div>
    </>
  )}
</AnimatePresence>

      </nav>
    </header>
  );
}

export default Navbar;