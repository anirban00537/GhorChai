import HomeCreate from "./HomeCreate/HomeCreate";
import Navbar from "./Navbar/Navbar";
import "./HomeCreate/HomeCreate.css";
const OwnerDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="instractionTop carousel slide">
        <h5>
          <i class="fas fa-chalkboard"></i> Learn More About Home Renting Have a
          Quick guide
        </h5>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className="iconDetCreA">
          <i class="fas fa-home"></i>
          <i class="fas fa-ad"></i>
          <i class="fab fa-amazon-pay"></i>
          <i class="fas fa-baby-carriage"></i>
          <i class="fas fa-binoculars"></i>
        </div>
      </div>
      <HomeCreate />
    </div>
  );
};

export default OwnerDashboard;
