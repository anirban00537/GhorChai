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
import DashboardPolice from "./Police/Dashboard";
import AuthDashboard from "./auth/AuthDashboard";
import UserSignup from "./auth/UserLogin/Signup";
import OwnerSignup from "./auth/OwnerLogin/Signup";
import { useEffect, useState } from "react";
import { FetchUserWithoutLogin } from "./Function/Function";
import { useSelector } from "react-redux";
import OwnerDashboard from "./OwnerSection/OwnerDashboard";
import Profile from "./OwnerSection/Complain/Profile";
import HomeItemDashboard from "./OwnerSection/HomeCreate/HomeItemDashboard";
// function Routers() {
//   const history = useHistory();
//   const { user, token, role } = useSelector((state) => state.user);

//   useEffect(() => {
//     if (user && token && role) {
//     } else {
//       console.log("there is no user ");
//       history.push("/auth");
//     }
//   }, []);
//   return role == "user" ? (
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/search" component={Search} />
//       <Route path="/details" component={Details} />
//       <Route path="/dashboard" component={Dashboard} />
//       <Route path="/userlogin" component={Login} />
//       <Route path="/usersignup" component={UserSignup} />
//       <Route path="/auth" component={AuthDashboard} />
//       <Route path="/ownerlogin" component={OwnerLogin} />
//       <Route path="/ownersignup" component={OwnerSignup} />
//     </Switch>
//   ) : (
//     <Switch>
//       <Route path="/userlogin" component={Login} />
//       <Route path="/usersignup" component={UserSignup} />
//       <Route path="/auth" component={AuthDashboard} />
//       <Route path="/ownerlogin" component={OwnerLogin} />
//       <Route path="/ownersignup" component={OwnerSignup} />
//       <Route exact path="/" component={OwnerDashboard} />
//       <Route path="/profile" component={Profile} />
//       <Route path="/details" component={HomeItemDashboard} />
//     </Switch>
//   );
// }

function Routers2() {
  const history = useHistory();
  const { user, token, role } = useSelector((state) => state.user);
  function renderSwitch(param) {
    switch (param) {
      case "user":
        return (
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
        );
      case "owner":
        return (
          <Switch>
            <Route path="/userlogin" component={Login} />
            <Route path="/usersignup" component={UserSignup} />
            <Route path="/auth" component={AuthDashboard} />
            <Route path="/ownerlogin" component={OwnerLogin} />
            <Route path="/ownersignup" component={OwnerSignup} />
            <Route exact path="/" component={OwnerDashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/details" component={HomeItemDashboard} />
          </Switch>
        );
      case "police":
        return (
          <Switch>
            <Route path="/userlogin" component={Login} />
            <Route path="/usersignup" component={UserSignup} />
            <Route path="/auth" component={AuthDashboard} />
            <Route path="/ownerlogin" component={OwnerLogin} />
            <Route path="/ownersignup" component={OwnerSignup} />
            <Route exact path="/" component={DashboardPolice} />
          </Switch>
        );
      default:
        return (
          <Switch>
            <Route path="/userlogin" component={Login} />
            <Route path="/usersignup" component={UserSignup} />
            <Route path="/auth" component={AuthDashboard} />
            <Route path="/ownerlogin" component={OwnerLogin} />
            <Route path="/ownersignup" component={OwnerSignup} />
          </Switch>
        );
    }
  }

  useEffect(() => {
    if (user && token && role) {
    } else {
      console.log("there is no user ");
      history.push("/auth");
    }
  }, []);
  return renderSwitch(role);
}

function App() {
  FetchUserWithoutLogin();
  return (
    <div>
      <Router>
        <Routers2 />
      </Router>
    </div>
  );
}

export default App;
