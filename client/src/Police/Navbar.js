import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="navbar fixed-top ">
      {" "}
      <Link className=" nav-link" to="/">
        <div className="nav justify-content-start brandname">GhorChai</div>
      </Link>
      <div className="navCenterItem">
        <ul className="nav justify-content-center">
          <li className="nav-item brNav">
            <i class="fab fa-dashcube"></i>
            <Link className=" nav-link" to="/">
              Police Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav username justify-content-end">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle logoutBtn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Options{" "}
          </button>
          <div
            class="dropdown-menu"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("jwt");
              localStorage.removeItem("role");
              history.push("/auth");
            }}
          >
            Logout
          </div>
        </div>

        {/* <img
          src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
          className="img-thumbnail img-thumbnail-navbar"
          alt="..."
        ></img> */}
      </div>
    </nav>
  );
};

export default Navbar;
