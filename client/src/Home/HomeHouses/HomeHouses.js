import Homeitem from "../Homeitem/Homeitem";

import { SendAndTakeHome } from "../../Function/Function";
import "../Homeitem/HomeHouses.css";
const HomeHouses = () => {
  SendAndTakeHome();
  return (
    <div className="">
      <Homeitem />
      {/* <div>
        <h1>This is a part</h1>
        homehouseMAin
      </div> */}
    </div>
  );
};

export default HomeHouses;
