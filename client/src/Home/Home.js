import HomeHouses from "./HomeHouses/HomeHouses";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mainfileHome">
        <HomeHouses />
      </div>
    </div>
  );
};

export default Home;
