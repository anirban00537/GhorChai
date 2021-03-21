import "./homeItemDashboard.css";
import Navbar from "../Navbar/Navbar";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getcurrentlyRenting } from "../../api/home";

const HomeItemDashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentlyRentingData, setcurrentlyRentingData] = useState({
    photo: "",
    name: "",
    email: "",
    address: "",
    nid: "",
    phone: "",
    sex: "",
  });
  useEffect(() => {
    getDataOfCurrentRenter(currentlyRenting);
  }, []);
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
    currentlyRenting,
  } = location.state.data;

  const getDataOfCurrentRenter = async (id) => {
    if (currentlyRenting == null) {
      return;
    }
    const { data } = await getcurrentlyRenting(id);
    setcurrentlyRentingData(data);
  };

  return (
    <div className="">
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
              <p className="title">
                <i class="fas fa-chart-area"></i>
                {area}
              </p>
              {currentlyRenting == null ? (
                ""
              ) : (
                <button className=" btn btnRent" onClick={handleShow}>
                  <i class="fas fa-audio-description"></i>
                  Renter Details
                </button>
              )}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Rented Person Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="mainRentalDet">
                    <div className="dpCon">
                      <img
                        className="imageDp"
                        src={currentlyRentingData.photo}
                      />
                    </div>
                    <div>
                      <p className="detName">Name</p>
                      <h5>{currentlyRentingData.name}</h5>
                    </div>
                    <div>
                      <p className="detName">Email</p>
                      <h5>{currentlyRentingData.email}</h5>
                    </div>
                    <div>
                      <p className="detName">Address</p>
                      <h5>{currentlyRentingData.address}</h5>
                    </div>
                    <div>
                      <p className="detName">NID</p>
                      <h5>{currentlyRentingData.nid}</h5>
                    </div>
                    <div>
                      <p className="detName">Phone</p>
                      <h5>{currentlyRentingData.phone}</h5>
                    </div>
                    <div>
                      <p className="detName">Gender</p>
                      <h5>{currentlyRentingData.sex}</h5>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <div className="row detSecAD ">
                <div className="col-3">
                  <p className="detINFO">
                    <i class="fas fa-phone"></i>Phone{" "}
                  </p>
                  <p className="bedbath">{phone}</p>
                </div>
                <div className="col-3">
                  <p className="detINFO">
                    {" "}
                    <i class="fas fa-id-badge"></i>NID
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
