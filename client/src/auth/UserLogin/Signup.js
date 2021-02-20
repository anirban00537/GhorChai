import "./userAuth.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="row userLogin">
      <div className="col-5 colorBack">
        <img src="./image/login.png" className="loginimage" />
      </div>
      <div className="col-7 formLog ">
        <form>
          <div className="loginName">
            <label htmlFor="exampleInputEmail1" className="LoginNameTitle">
              User Signup
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
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>
            <input
              class="form-control"
              type="text"
              placeholder="Address"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">NID Number</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your NID number"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your phone number"
            ></input>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Sex</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Male</option>
              <option>Female</option>
            </select>
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
            Signup
          </button>
          <Link className="rent btn" to="/userlogin">
            Signin
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
