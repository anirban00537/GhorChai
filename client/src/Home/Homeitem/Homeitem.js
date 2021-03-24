import { useSelector } from "react-redux";
import "./HomeHouses.css";
import { useHistory } from "react-router-dom";
import emptyImage from "./undraw_blank_canvas_3rbb.png";
import moment from "moment";
import ads from "./homeeee.png";
import { useState } from "react";
const Homeitem = () => {
  const homeapi = useSelector((state) => state.userHome);
  const [para, setPara] = useState(null);
  const home = homeapi.filter((h) => h.status == "false");
  const homeRen = homeapi.filter((h) => h.status == "true");
  console.log(homeapi);

  const history = useHistory();
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };
  console.log("homeitem");

  return (
    <div>
      {home.length < 1 ? (
        <div className="imageEmptyContainer">
          {" "}
          <img src={emptyImage} className="imageEmpty" />
          <h2>No Home</h2>
        </div>
      ) : (
        <div className="homehouseMAin">
          <div>
            {home.map((h) => (
              <div
                className="mainfile  "
                onClick={() => {
                  setPara(h);
                }}
              >
                <div className="homeImageContainer">
                  <img key={h.nid} className="homeImage" src={h.photo[0]} />
                </div>
                <div className="colDetails">
                  <div className="priceAndTitle">
                    <div className=" titleWithMoney">
                      <div className="titleHome">{h.title}</div>
                    </div>
                    {/* <div className="addressArea">
                      <p className="place ">{h.address}</p>
                      <p className=" bedroomS">{h.area}</p>
                    </div> */}

                    <div className="btnHomeItem">
                      <button
                        className="btnDetails btn btn-sm"
                        onClick={() => {
                          toDetails(h);
                        }}
                      >
                        <i class="fas fa-calendar-week"></i>

                        <div> Details</div>
                      </button>
                      <p className="place ">{h.address}</p>
                      <p className=" bedroomS">{h.area}</p>
                      <div className=" priceHome">{h.price}TK</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="adsContainer ">
            <h5>Last Rented Homes</h5>
            {homeRen.map((h) => (
              <div className="sidebarAds">
                <p className="adareas">{h.area}</p>
                <p className="adRoom">{h.nid} Rooms</p>
                <p className="adtk">{h.price} TK</p>
                <p className="adtime">
                  Posted {moment(h.createdAt).startOf("hour").fromNow()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homeitem;
