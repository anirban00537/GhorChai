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
              <div className="row col-9">
                <div className="col-5 homeImage ">
                  <img key={h.nid} className="col homeImage" src={h.photo[0]} />
                </div>
                <div className="col-7 colDetails">
                  <div className="priceAndTitle">
                    <div className="row">
                      <div className="col-7 titleHome">{h.title}</div>
                      <div className="col-5 priceHome">{h.price}TK</div>
                    </div>
                    <div className="row">
                      <p className="place col-12">{h.address}</p>
                    </div>
                    <div className="row">
                      <p className="col-12 bedroomS">{h.area}</p>
                    </div>
                    <div className="row btn-area col-12">
                      <button
                        className="btnDetails btn btn-"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homeitem;
