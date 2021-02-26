import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="nav justify-content-start brandname">GHORCHAI</div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Owner Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/complain">
            Complains
          </Link>
        </li>
      </ul>
      <div className="nav username justify-content-end">
        Anirban Roy
        <img
          src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
          className="img-thumbnail img-thumbnail-navbar"
          alt="..."
        ></img>
      </div>
    </nav>
  );
};

export default Navbar;
