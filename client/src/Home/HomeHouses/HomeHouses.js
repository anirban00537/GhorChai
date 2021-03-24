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
          Include jQuery first, then a Bootstrap JavaScript bundle. For more
          information about what’s included in Bootstrap, please see ourInclude
          jQuery first, then a Bootstrap JavaScript bundle. For more information
          about what’s included in Bootstrap, please see ourInclude jQuery
          first, then a Bootstrap JavaScript bundle. For more information about
          what’s included in Bootstrap, please see our
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
