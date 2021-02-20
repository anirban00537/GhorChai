import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./auth/UserLogin/Login";
import OwnerLogin from "./auth/OwnerLogin/Login";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Dashboard from "./UserDashboard/Dashboard";
import AuthDashboard from "./auth/AuthDashboard";
import UserSignup from "./auth/UserLogin/Signup";
import OwnerSignup from "./auth/OwnerLogin/Signup";

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/userlogin" component={Login} />
      <Route exact path="/ownerlogin" component={OwnerLogin} />
      <Route exact path="/usersignup" component={UserSignup} />
      <Route exact path="/ownersignup" component={OwnerSignup} />
      <Route exact path="/auth" component={AuthDashboard} />
    </Switch>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
