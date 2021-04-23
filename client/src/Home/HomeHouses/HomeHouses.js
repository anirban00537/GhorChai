import Homeitem from "../Homeitem/Homeitem";

import { SendAndTakeHome } from "../../Function/Function";
import "../Homeitem/HomeHouses.css";
const HomeHouses = () => {
  SendAndTakeHome();
  return (
    <div className="">
      <div className="bannerTop">
        <h5>
          <i class="fas fa-chalkboard"></i> Learn More About Home Renting Have a
          Quick guide
        </h5>
        <p>
          This is user section where you will find different homes from
          different place feel free to discover different house and enjoy them
          according to your needs you can also complain different problems to
          your owner and can have some help from your home owner, there is no
          difficulty in this section there are chat option using which you can
          have some conversion with your land loard you can have and estimetion
          about your total year rendting
        </p>
      </div>
      <Homeitem />
      {/* <div>
        <h1>This is a part</h1>
        homehouseMAin
      </div> */}
    </div>
  );
};

export default HomeHouses;
