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
        <div className="mainDashUSer">
          <div className=" leftDashuser ">
            <div className=" ">
              <img src={userData.photo} className="imageDp" />
            </div>
            <h3 className="notRentedYEt">Personal Info</h3>

            {/* name */}
            <div className="proSecInFo">
              <div className="myDashInfo">
                <h6 className="titleor">Name</h6>
              </div>
              <div className="">
                <h5 className="apiInfoUSerDash">{userData.name}</h5>
              </div>
            </div>
            <div className="proSecInFo">
              <div className="myDashInfo">
                <h6 className="titleor">Phone number</h6>
              </div>
              <div className="">
                <h5 className="apiInfoUSerDash">{userData.phone}</h5>
              </div>
            </div>
            <div className="proSecInFo">
              <div className="myDashInfo">
                <h6 className="titleor">Gender</h6>
              </div>
              <div className="">
                <h5 className="apiInfoUSerDash">{userData.sex}</h5>
              </div>
            </div>
            <div className="proSecInFo">
              <div className="myDashInfo">
                <h6 className="titleor">Address</h6>
              </div>
              <div className="">
                <h5 className="apiInfoUSerDash">{userData.address}</h5>
              </div>
            </div>
            <div className="proSecInFo">
              <div className="myDashInfo">
                <h6 className="titleor">NID Card Number</h6>
              </div>
              <div className="">
                <h5 className="apiInfoUSerDash">{userData.nid}</h5>
              </div>
            </div>
          </div>
          <div className="rightDashuser">
            <h5 className="RentedHouseTitle">Rented House</h5>
            <RentedHouse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
