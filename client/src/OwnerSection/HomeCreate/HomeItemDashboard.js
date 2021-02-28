import "./homeItemDashboard.css";

import Navbar from "../Navbar/Navbar";
import { useLocation, useHistory } from "react-router-dom";
const HomeItemDashboard = () => {
  const history = useHistory();
  const location = useLocation();
  if (!location.state) {
    history.push("/auth");
    return 0;
  }
  const {
    area,
    description,
    nid,
    phone,
    photo,
    price,
    title,
    address,
  } = location.state.data;
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
            <h3 className="title">{title}</h3>
            <p className="address">{address}</p>
            <button className=" btn btnRent btn-">Rent now</button>
            <div className="row ">
              <div className="col-3">
                <p className="bedbath">{phone}</p>
              </div>
              <div className="col-3">
                <p className="bedbath">{nid}</p>
              </div>
              <div className="col-3">
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
