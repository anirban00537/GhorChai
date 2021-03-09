import Homeitem from "../Homeitem/Homeitem";

import { SendAndTakeHome } from "../../Function/Function";
import "../Homeitem/HomeHouses.css";
const HomeHouses = () => {
  SendAndTakeHome();
  return (
    <div className="">
      <Homeitem />
    </div>
  );
};

export default HomeHouses;
