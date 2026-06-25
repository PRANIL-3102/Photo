import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
    <h2>
        Photographer
        <span>Bhaiya</span>
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

      </nav>
    </header>
  );
}

export default Navbar;