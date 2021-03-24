import "./Details.css";

import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { useLocation, useHistory } from "react-router-dom";
const HomeItemDashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        rent: 1,
        complains: [],
      })
      .then((data) => {
        console.log(data.nessage);
        history.push("/dashboard");
      });
  };
  const UnrentHome = () => {
    axios
      .patch("http://localhost:5000/user/setrent", {
        _id: _id,
        user_id: user_id,
        rent: 0,
      })
      .then((data) => {
        console.log(data.nessage);
        history.push("/");
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
            <p className="address">
              <i class="fas fa-map-marker-alt"></i>
              {address}
            </p>

            {status == "false" ? (
              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header className="btspriceEstidiv" closeButton>
                    <Modal.Title>
                      <i class="far fa-calendar-alt"></i>1 Year Price
                      Estimations
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="btspriceEstidiv">
                    <div className="priceEstidiv">
                      <div>
                        <h6 className="priceEstomon">
                          <i class="fas fa-calendar-times"></i>1 month
                        </h6>
                        <h4 className="monprice">{price}TK</h4>
                      </div>
                      <div>
                        <h6 className="priceEstomon">
                          <i class="fas fa-calendar-times"></i>6 month
                        </h6>
                        <h4 className="monprice">{price * 6}TK</h4>
                      </div>
                      <div>
                        <h6 className="priceEstomon">
                          <i class="fas fa-calendar-times"></i>12 month
                        </h6>
                        <h4 className="monprice">{price * 12}TK</h4>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <div className="detBtnSec">
                  <button
                    className="btn btnRent "
                    onClick={() => {
                      rentHome();
                    }}
                  >
                    <i className="fas fa-bed"></i>
                    <div>Rent now</div>
                  </button>
                  <button
                    className="btn btnRent "
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    <i class="fas fa-tags"></i>
                    <div>Price Estimations</div>
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="btn btnRent "
                  onClick={() => {
                    UnrentHome();
                  }}
                >
                  <i className="fas fa-bed"></i>
                  <div>Unrent</div>
                </button>
              </div>
            )}

            <div className="row detSecAD ">
              <div className="col-3">
                <p className="detINFO">
                  <i class="fas fa-phone"></i>Phone
                </p>
                <p className="bedbath">{phone}</p>
              </div>
              <div className="col-3">
                <p className="detINFO">
                  <i class="fas fa-id-badge"></i>Room
                </p>
                <p className="bedbath">{nid}</p>
              </div>
              <div className="col-3">
                <p className="detINFO">
                  <i class="fas fa-money-bill-wave-alt"></i>Price
                </p>
                <p className="bedbath">{price}</p>
              </div>
            </div>
            <div>
              <p className="damtiti">
                {" "}
                <i class="fas fa-audio-description"></i>Description
              </p>
              <p className="totalDetais">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItemDashboard;
