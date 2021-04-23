import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
      <div className="nav justify-content-start brandname">GHORCHAI</div>
      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center DotClass"
        id="navbarTogglerDemo01"
      >
        <div className="navCenterItem justify-content-end ">
          <ul className="nav justify-content-center ">
            <li className="nav-item brNav">
              <i class="fab fa-dashcube"></i>
              <Link className=" nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item brNav">
              <i class="fas fa-sticky-note"></i>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li
              className="nav-item "
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("jwt");
                localStorage.removeItem("role");
                history.push("/auth");
              }}
            >
              <i class="fas fa-sign-out-alt"></i>
              <Link className="nav-link" to="/profile">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
