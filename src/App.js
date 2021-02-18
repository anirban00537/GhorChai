import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Search from "./Search/Search";
import Dashboard from "./UserDashboard/Dashboard";

function HomeRent() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/details" component={Details} />
      <Route exact path="/dashboard" component={Dashboard} />
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
