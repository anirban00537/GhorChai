import "./Details.css";

import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
const HomeItemDashboard = () => {
  const history = useHistory();
  const location = useLocation();
  const user_id = localStorage.getItem("user");
  if (!location.state) {
    history.push("/auth");
    return 0;
  }
  const {
    _id,
    area,
    status,
    description,
    nid,
    phone,
    photo,
    price,
    title,
    address,
  } = location.state.data;
  const rentHome = () => {
    axios
      .patch("http://localhost:5000/user/setrent", {
        _id: _id,
        user_id: user_id,
      })
      .then((data) => {
        console.log(data.nessage);
      });
  };
  // useEffect(() => {});
  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="row">
          <div class="col imgContainer">
            {photo.map((p) => (
              <img className="col item" src={p} />
            ))}
          </div>
          <div className="col DetailsContainer">
            <p className="details">Details</p>
            <h5 className="title">{title}</h5>
            <p className="address">{address}</p>

            {status == "false" ? (
              <button
                className="btn btnRent "
                onClick={() => {
                  rentHome();
                }}
              >
                <i className="fas fa-bed"></i>
                <div>Rent now</div>
              </button>
            ) : (
              <div className="rentedUser">
                <div>Rented</div>
              </div>
            )}

            <div className="row detSecAD ">
              <div className="col-3">
                <p className="detINFO">Phone Number</p>
                <p className="bedbath">{phone}</p>
              </div>
              <div className="col-3">
                <p className="detINFO">NID</p>
                <p className="bedbath">{nid}</p>
              </div>
              <div className="col-3">
                <p className="detINFO">Price</p>
                <p className="bedbath">{price}</p>
              </div>
            </div>

            <p className="totalDetais">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItemDashboard;
