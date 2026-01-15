import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">VALA WATERPROOFING</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
