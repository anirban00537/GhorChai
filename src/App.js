import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home/Home";
import UserDashboard from "./UserDashboard/UserDashboard";

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
      <Route exact path="/dashboard" component={UserDashboard} />
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
