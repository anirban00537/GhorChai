import "./userAuth.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { signinAction } from "../../features/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../api/user";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const getUser = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const tdata = await signin(auth.email, auth.password);
    console.log(tdata.data);
    localStorage.setItem("jwt", tdata.data.token);
    localStorage.setItem("user", tdata.data.user._id);
    localStorage.setItem("role", tdata.data.user.role);
    dispatch(
      signinAction(tdata.data.user._id, tdata.data.token, tdata.data.user.role)
    );
    history.push("/");
  };
  return (
    <div className="row userLogin">
      <div className="col-5 colorBack">
        <img src="./image/login.png" className="loginimage" />
      </div>
      <div className="col-7 formLog ">
        <form onSubmit={handelSubmit}>
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
              value={auth.email}
              onChange={(e) => {
                setAuth({ ...auth, email: e.target.value });
              }}
            />
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
