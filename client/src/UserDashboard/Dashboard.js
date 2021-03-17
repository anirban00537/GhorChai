import Navbar from "../Navbar/Navbar";
import Complain from "./Complain";
import "./Dashboard.css";
import RentedHouse from "./RentedHouse";
import { useSelector } from "react-redux";
import { userInfo } from "../api/user";
import axios from "axios";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [userData, setUserData] = useState({
    address: "",
    email: "",
    name: "",
    nid: "",
    phone: "",
    sex: "",
    photo: "",
  });
  const id = useSelector((state) => state.user.user);

  useEffect(async () => {
    var a = await userInfo(id);

    const { address, email, name, nid, phone, sex, photo } = a.data[0];
    setUserData({
      address: address,
      email: email,
      name: name,
      nid: nid,
      phone: phone,
      sex: sex,
      photo: photo,
    });
  }, []);

  return (
    <div class="">
      <Navbar />
      <div className="containerDash">
        <div className="row">
          <div className="col-5 dpInfo">
            <div className="col DetSec">
              <img src={userData.photo} className="imageDp" />
            </div>
            <div className="col DetSec">
              <h3>Personal Info</h3>
            </div>
            {/* name */}
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Name</h6>
              </div>
              <div className="row">
                <h5>{userData.name}</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Phone number</h6>
              </div>
              <div className="row">
                <h5>{userData.phone}</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Gender</h6>
              </div>
              <div className="row">
                <h5>{userData.sex}</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Address</h6>
              </div>
              <div className="row">
                <h5>{userData.address}</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">NID Card Number</h6>
              </div>
              <div className="row">
                <h5>{userData.nid}</h5>
              </div>
            </div>
          </div>
          <div className="col-7">
            <h5>Rented House</h5>
            <RentedHouse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
