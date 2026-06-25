import { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

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
            <li>Portfolio</li>
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

      </nav>
    </header>
  );
}

export default Navbar;