import "./userAuth.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="row userLogin">
      <div className="col-5 colorBack">
        <img src="./image/login.png" className="loginimage" />
      </div>
      <div className="col-7 formLog ">
        <form>
          <div className="loginName">
            <label htmlFor="exampleInputEmail1" className="LoginNameTitle">
              Login
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn greenClrBtn">
            Signin
          </button>
          <Link className="rent btn" to="/usersignup">
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
