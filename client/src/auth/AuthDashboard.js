import "./Auth.css";
import { Link } from "react-router-dom";

const AuthDashboard = () => {
  return (
    <div className="mainSectionAuth">
      <div className="firstSection">
        <img src="./image/home.png" className="authimage" />
      </div>
      <div className="secondSection  ">
        <Link className="rent btn" to="/userlogin">
          Signin/up For Rent
        </Link>

        <Link className="owner btn" to="/ownerlogin">
          Signin/up As Owner
        </Link>
      </div>
    </div>
  );
};

export default AuthDashboard;
