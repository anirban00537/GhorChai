import "./ownerAuth.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { signup } from "../../api/user";
const Signup = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: "",
    role: "owner",
    address: "",
    nid: "",
    phone: "",
    sex: "Male",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    await signup(auth);
    history.push("/ownerlogin");
  };
  return (
    <div className="row userLogin">
      <div className="col-5 colorBack">
        <img src="./image/owner.png" className="ownerAuth" />
      </div>
      <div className="col-7 formLog ">
        <form onSubmit={handelSubmit}>
          <div className="loginName">
            <label htmlFor="exampleInputEmail1" className="LoginNameTitle">
              Owner Signup
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
              value={auth.email}
              onChange={(e) => {
                setAuth({ ...auth, email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputname">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              value={auth.name}
              onChange={(e) => {
                setAuth({ ...auth, name: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>
            <input
              class="form-control"
              type="text"
              placeholder="Address"
              value={auth.address}
              onChange={(e) => {
                setAuth({ ...auth, address: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">NID Number</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your NID number"
              value={auth.nid}
              onChange={(e) => {
                setAuth({ ...auth, nid: e.target.value });
              }}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your phone number"
              value={auth.phone}
              onChange={(e) => {
                setAuth({ ...auth, phone: e.target.value });
              }}
            ></input>
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Sex</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={auth.sex}
              onChange={(e) => {
                setAuth({ ...auth, sex: e.target.value });
              }}
            >
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
              value={auth.password}
              onChange={(e) => {
                setAuth({ ...auth, password: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn greenClrBtn">
            Signup
          </button>
          <Link className="rent btn" to="/ownerlogin">
            Signin
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
