import { useSelector } from "react-redux";
import "./HomeHouses.css";
import { Link, useHistory } from "react-router-dom";
const Homeitem = () => {
  const home = useSelector((state) => state.userHome);
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
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Homeitem;
