import "./Dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const RentedHouse = () => {
  const user = localStorage.getItem("user");
  const [house, setHouse] = useState([]);
  const history = useHistory();
  const rentedHouse = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/user/userrentedhouse/${user}`
    );
    setHouse(data);
  };
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };

  useEffect(() => {
    rentedHouse();
  }, []);

  return (
    <div className="">
      <div className="rightOwnerrent">
        {house.map((m) => (
          <div className="submittedHome">
            <div className="photoSectionDash">
              {/* {m.photo.map((im) => (
                <img className="innerImg" src={im} />
              ))} */}
              <img className="innerImg" src={m.photo[0]} />
            </div>
            <div className="titleDemoLittle">
              <p>{m.title}</p>
            </div>
            <div className="btn_cover">
              <button
                className="btn btn_del btn-sm"
                onClick={() => {
                  toDetails(m);
                }}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentedHouse;
