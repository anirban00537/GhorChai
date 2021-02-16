import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav justify-content-start brandname">GHORCHAI</div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Give Rent
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Dashboard
          </a>
        </li>
      </ul>
      <div className="nav justify-content-end">
        Anirban Roy
        <img
          src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
          className="img-thumbnail img-thumbnail-navbar"
          alt="..."
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
