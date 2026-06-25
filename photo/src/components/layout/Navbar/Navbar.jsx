import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
          <h2>PhotographerBhaiya</h2>
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
          <button>Book Your Story →</button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;