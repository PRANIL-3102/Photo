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
            <motion.li
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
transition={{delay:.15}}
>

Home

</motion.li>
            <motion.li
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
transition={{delay:.25}}
>

Stories

</motion.li>
           <motion.li
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
transition={{delay:.35}}
>

Services

</motion.li>
           <motion.li
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
transition={{delay:.45}}
>

About

</motion.li>
            <motion.li
initial={{opacity:0,x:50}}
animate={{opacity:1,x:0}}
transition={{delay:.55}}
>

Contact

</motion.li>
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
      <div
        className="close-icon"
        onClick={() => setMenuOpen(false)}
      >
        <HiOutlineX />
      </div>

      <ul>
        <li>Home</li>
        <li>Stories</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button>Book Your Story</button>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </header>
  );
}

export default Navbar;