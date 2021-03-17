import "./Dashboard.css";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import emptyImage from "./undraw_blank_canvas_3rbb.png";
import { complains } from "../api/home";
const RentedHouse = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = localStorage.getItem("user");
  const [house, setHouse] = useState([]);
  const history = useHistory();
  const [m1, setM1] = useState();
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
  const [complain, setComplain] = useState({
    name: "renter",
    complains: "",
  });

  useEffect(() => {
    rentedHouse();
  }, [show, m1]);

  return (
    <div className="">
      {m1 != undefined ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Complain History</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {m1.complains.map((c) =>
              c.name == "owner" ? (
                <div className="ownerChat">
                  <p className="ownerChath1">{c.complains}</p>
                </div>
              ) : (
                <div className="renterChat">
                  <p className="renterChath1">{c.complains}</p>
                </div>
              )
            )}
          </Modal.Body>
          <Modal.Footer>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={complain.complains}
                onChange={(e) => {
                  setComplain({
                    ...complain,
                    complains: e.target.value,
                  });
                }}
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                  complains(m1._id, complain);
                  rentedHouse();

                  // handleClose();
                }}
              >
                Send
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}

      <div className="rightOwnerrent">
        {house.length < 1 ? (
          <div className="imageEmptyContainer">
            {" "}
            <img src={emptyImage} className="imageEmpty" />
            <h2>No House Is Rented Yet</h2>
          </div>
        ) : (
          <div>
            {house.map((m) => (
              <div className="submittedHomethis">
                <div className="photoSectionDash">
                  {/* {m.photo.map((im) => (
                <img className="innerImg" src={im} />
              ))} */}
                  <img className="innerImgcstm" src={m.photo[0]} />
                </div>
                <div className="titleDemoLittleMod">
                  <p>{m.title}</p>
                </div>
                <div className="btn_cover_yo">
                  <div className="btn_coverthis">
                    <button
                      className="btn btn_del btn-sm"
                      onClick={() => {
                        toDetails(m);
                      }}
                    >
                      Details
                    </button>
                  </div>
                  <div className="btn_coverthis">
                    <button
                      className="btn btn_complain btn-sm"
                      onClick={() => {
                        setM1(m);
                        handleShow();
                      }}
                    >
                      Complain
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RentedHouse;
