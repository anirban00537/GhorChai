import "./HomeCreate.css";
import FileBase from "react-file-base64";
import { useEffect, useState } from "react";
import moment from "moment";
import { deleteHouse, postHome } from "../../api/home";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { complains } from "../../api/home";
import {
  createHome,
  DeleteHomeAction,
  HomeAction,
} from "../../features/actions/Home";
import { Link, useHistory } from "react-router-dom";
import emptyImage from "./undraw_blank_canvas_3rbb.png";

const HomeCreate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [m1, setM1] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [img, setImg] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const homeData = useSelector((state) => state.home);
  const { user } = useSelector((state) => state.user);
  const [home, setHome] = useState({
    title: "",
    description: "",
    address: "",
    price: 0,
    area: "",
    nid: "",
    phone: "",
    homeOwner: "",
    currentlyRenting: null,
  });
  const [complain, setComplain] = useState({
    name: "owner",
    complains: "",
  });

  const postCloudImage = () => {
    const data = new FormData();
    data.append("file", imgUrl);
    data.append("upload_preset", "rentahome");
    data.append("cloud_name", "dfvtfwt6f");
    fetch("https://api.cloudinary.com/v1_1/dfvtfwt6f/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletehomefunction = (id) => {
    dispatch(DeleteHomeAction(id));
  };

  useEffect(() => {
    setHome({ ...home, homeOwner: user });
    dispatch(HomeAction(user));
    setM1(homeData.complains);
  }, [dispatch]);
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();

    dispatch(createHome(home, img));
    setHome({
      title: "",
      description: "",
      address: "",
      price: 0,
      area: "Sonadanga",
      nid: "",
      phone: "",
      homeOwner: "",
    });
    setImg([null]);
    // dispatch(HomeAction(user));
  };

  return (
    <div className="mainOwnerHomeCreate">
      <div className="leftOwner">
        <form onSubmit={handelSubmit}>
          <div className="homCrName">
            <i className="fas fa-warehouse"></i>
            <label htmlFor="exampleInputEmail1" className="NameTitledash">
              Add A home
            </label>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputTitle" className="details">
              {" "}
              Title
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              value={home.title}
              onChange={(e) => {
                setHome({ ...home, title: e.target.value });
              }}
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputTitle" className="details">
              {" "}
              Description
            </label>
            <textarea
              type="text"
              className="form-control "
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              value={home.description}
              onChange={(e) => {
                setHome({ ...home, description: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1" className="details">
              {" "}
              Address
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
              value={home.address}
              onChange={(e) => {
                setHome({ ...home, address: e.target.value });
              }}
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1" className="details">
              {" "}
              Add Photo (Atlest 5)
            </label>
            {/* <FileBase
              type="file"
              multipla={false}
              value={img}
              onDone={({ base64 }) => setImg([...img, base64])}
            /> */}
            <input
              type="file"
              className="form-control"
              placeholder="Rent Amount"
              value={home.price}
              onChange={(e) => {
                // setImg([...img, e.target.files]);
                // console.log(img);
                setImgUrl(e.target.files);
                postCloudImage();
              }}
            />
          </div>

          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1" className="details">
              Price
            </label>
            <input
              type="number"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Rent Amount"
              value={home.price}
              onChange={(e) => {
                setHome({ ...home, price: e.target.value });
              }}
            />
          </div>
          <div class="form-group addHomeWidth">
            <label for="exampleFormControlSelect1" className="details">
              Area
            </label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={home.area}
              onChange={(e) => {
                setHome({ ...home, area: e.target.value });
              }}
            >
              <option>Sonadanga</option>
              <option>Khalishpur</option>
              <option>Khulna Sadar</option>
              <option>Sibbari</option>
              <option>Nirala</option>
              <option>Gollamari</option>
              <option>Dakop</option>
              <option>Rupsha</option>
              <option>Kalibari</option>
            </select>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1" className="details">
              Rooms
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputnid"
              aria-describedby="emailHelp"
              placeholder="Enter Rooms number"
              value={home.nid}
              onChange={(e) => {
                setHome({ ...home, nid: e.target.value });
              }}
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1" className="details">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control "
              id="exampleInputphone"
              aria-describedby="emailHelp"
              placeholder="Enter Phone Number"
              value={home.phone}
              onChange={(e) => {
                setHome({ ...home, phone: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn greenClrBtn addHomeWidth">
            Make Your Home Listing
          </button>
        </form>
      </div>
      <div className="rightOwner">
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
                  placeholder="Ans A Reply"
                  aria-label="Ans A Reply"
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
                    dispatch(HomeAction(user));
                    setComplain({ name: "owner", complains: "" });
                    handleClose();
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

        {homeData.length < 1 ? (
          <div className="imageEmptyContainer">
            {" "}
            <img src={emptyImage} className="imageEmpty" />
            <h2>No Home</h2>
          </div>
        ) : (
          <div>
            {" "}
            {homeData.map((m) => (
              <div className="submittedHome">
                <div className="photoSectionDash">
                  <img className="innerImg" src={m.photo[0]} />
                </div>
                <div className="titleDemoLittle">
                  <div className="detTimeclass">
                    {m.currentlyRenting ? (
                      <p className="rentedOwner">Rented</p>
                    ) : (
                      <p className="NotrentedOwner">Not Rented</p>
                    )}
                    <p className="homeCreTitle">{m.title}</p>
                    <p className="timeClass">
                      {moment(m.createdAt).format("dddd")}
                    </p>
                  </div>
                </div>
                <div className="btn_cover">
                  <button
                    className="btn btn_del btn-sm disable"
                    onClick={() => {
                      deletehomefunction(m._id);
                    }}
                  >
                    Delete
                  </button>
                  {m.currentlyRenting ? (
                    <button
                      className="btn btn_complain btn-sm"
                      onClick={() => {
                        setM1(m);
                        handleShow();
                      }}
                    >
                      Complains
                    </button>
                  ) : (
                    <button
                      className="btn btn_complain btn-sm"
                      onClick={() => {
                        setM1(m);
                        handleShow();
                      }}
                      disabled
                    >
                      Complains
                    </button>
                  )}

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
        )}
      </div>
    </div>
  );
};
export default HomeCreate;
