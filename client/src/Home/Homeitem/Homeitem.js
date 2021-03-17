import { useSelector } from "react-redux";
import "./HomeHouses.css";
import { useHistory } from "react-router-dom";
import emptyImage from "./undraw_blank_canvas_3rbb.png";
const Homeitem = () => {
  const homeapi = useSelector((state) => state.userHome);
  const home = homeapi.filter((h) => h.status == "false");
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
        <div>
          {home.map((h) => (
            <div className="mainfile ">
              <div className="homeImageContainer">
                <img key={h.nid} className="homeImage" src={h.photo[0]} />
              </div>
              <div className="colDetails">
                <div className="priceAndTitle">
                  <div className=" titleWithMoney">
                    <div className="titleHome">{h.title}</div>
                    <div className=" priceHome">{h.price}TK</div>
                  </div>
                  <div className="addressArea">
                    <p className="place ">{h.address}</p>
                    <p className=" bedroomS">{h.area}</p>
                  </div>

                  <div className="">
                    <button
                      className="btnDetails btn btn-sm"
                      onClick={() => {
                        toDetails(h);
                      }}
                    >
                      <i class="fas fa-calendar-week"></i>

                      <div> Details</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homeitem;
