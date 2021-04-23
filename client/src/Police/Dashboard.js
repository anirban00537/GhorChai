import "./Dashboard.css";
import Navbar from "./Navbar";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { UserHomeAction } from "../features/actions/Home";
import { getallusers } from "../api/user";
const Dashboard = () => {
  const history = useHistory();
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const homes = useSelector((state) => state.userHome);
  const rentedUser = user.filter((u) => u.role == "user");
  const owner = user.filter((u) => u.role == "owner");
  const fetchUser = async () => {
    const { data } = await getallusers();
    setUser(data);
  };
  const rentedHome = homes.filter((h) => h.currentlyRenting != null);
  useEffect(() => {
    dispatch(UserHomeAction());
    fetchUser();
  }, []);
  return (
    <div className="policeDashboard ">
      <Navbar />
      <div className="mainPolice">
        <div className="policeFirst">
          {/* <h2>Police Panel</h2> */}
          <div
            id="carouselExampleCaptions"
            className="carousel slide midCover"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/27/07/38/dangerous-1282330_960_720.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p> */}
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  src="https://cdn.pixabay.com/photo/2020/03/31/14/04/covid-19-4987797_960_720.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p> */}
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  src="https://cdn.pixabay.com/photo/2016/06/09/23/46/war-1447021_960_720.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p> */}
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="mainpoliceText">
            <div className="mainpoliceTextfirst">
              <h3 className="h3Total">Total House</h3>
              <h1 className="h1color">{homes.length}</h1>
              <h3 className="h3Total">Total Rented House</h3>
              <h1 className="h1color">{rentedHome.length}</h1>
            </div>
            <div className="mainpoliceTextsecond">
              <h3 className="h3Total">Home Owner</h3>
              <h1 className="h1color">{owner.length}</h1>
              <h3 className="h3Total">Normal User</h3>
              <h1 className="h1color">{rentedUser.length}</h1>
            </div>
          </div>
        </div>
        <div className="policeSecond">
          <h4>Rented House Details</h4>
          {rentedHome.map((home) => (
            <div
              className="policeHomeItem"
              onClick={() => {
                toDetails(home);
              }}
            >
              <img src={home.photo[0]} className="imgPolicea" />
              <div className="PoliceDiv">
                {" "}
                <p className="PoliceDivtitle">Title</p>
                <p className="homePoliceTitle">{home.title}</p>
              </div>
              <div className="PoliceDiv">
                <p className="PoliceDivtitle">Area</p>
                <p className="homePoliceTitlearea">{home.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
