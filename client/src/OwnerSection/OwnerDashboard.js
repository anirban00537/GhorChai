import HomeCreate from "./HomeCreate/HomeCreate";
import Navbar from "./Navbar/Navbar";
import Navbar1 from "./Navbar/Navbar1";
import "./HomeCreate/HomeCreate.css";
const OwnerDashboard = () => {
  return (
    <div className="homeCreateContainer">
      <Navbar1 />
      <div className="instractionTop ">
        <h5>
          <i className="fas fa-chalkboard"></i> Learn More About Home Renting
          Have a Quick guide
        </h5>
        <p className="instractiondo">
          Add home and enjoy your rent . It is a simple process using which you
          can add your house and you dont have to worry about anything
          everything is settled .users will find out your house and will rent
          it,all the process are so simple that anyone can apply and enjoy it
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
