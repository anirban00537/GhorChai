import "./homeItemDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HomeAction } from "../../features/actions/Home";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
const HomeItemDashboard = (props) => {
  const location = useLocation();
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
  useEffect(() => {});
  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="row">
          <div class="col imgContainer">
            {photo.map((p) => (
              <img className="col item" src={p} />
            ))}

            {/* <img
              className="col item"
              src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
            />
            <img
              className="col item"
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            /> */}
          </div>
          <div className="col DetailsContainer">
            {/* //details */}

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
