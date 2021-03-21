import "./Dashboard.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const homes = useSelector((state) => state.userHome);
  const rentedHome = homes.filter((h) => h.currentlyRenting != null);
  return (
    <div className="policeDashboard">
      <Navbar />
      {rentedHome.map((home) => (
        <div>
          <p>{home.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
