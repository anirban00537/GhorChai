import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Login from "./auth/UserLogin/Login";
import OwnerLogin from "./auth/OwnerLogin/Login";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Dashboard from "./UserDashboard/Dashboard";
import AuthDashboard from "./auth/AuthDashboard";
import UserSignup from "./auth/UserLogin/Signup";
import OwnerSignup from "./auth/OwnerLogin/Signup";
import { useEffect, useState } from "react";
import { FetchUserWithoutLogin } from "./Function/Function";
import { useSelector } from "react-redux";
import OwnerDashboard from "./OwnerSection/OwnerDashboard";

function Routers() {
  const history = useHistory();
  const { user, token, role } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && token && role) {
    } else {
      console.log("there is no user ");
      history.push("/auth");
    }
  }, []);
  return role == "user" ? (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/details" component={Details} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/userlogin" component={Login} />
      <Route path="/usersignup" component={UserSignup} />
      <Route path="/auth" component={AuthDashboard} />
      <Route path="/ownerlogin" component={OwnerLogin} />
      <Route path="/ownersignup" component={OwnerSignup} />
    </Switch>
  ) : (
    <Switch>
      <Route path="/userlogin" component={Login} />
      <Route path="/usersignup" component={UserSignup} />
      <Route path="/auth" component={AuthDashboard} />
      <Route path="/ownerlogin" component={OwnerLogin} />
      <Route path="/ownersignup" component={OwnerSignup} />
      <Route path="/" component={OwnerDashboard} />
    </Switch>
  );
}

function App() {
  FetchUserWithoutLogin();
  return (
    <div>
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
