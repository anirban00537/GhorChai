import Navbar from "../Navbar/Navbar";
import Complain from "./Complain";
import "./Dashboard.css";
import RentedHouse from "./RentedHouse";
const Dashboard = () => {
  return (
    <div class="">
      <Navbar />

      <div className="containerDash">
        <div className="row">
          <div className="col-5 dpInfo">
            <div className="col DetSec">
              <img
                src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=6&m=1179420343&s=612x612&w=0&h=y7GrwxrbixTWvJfaeiu55rWXMGYr6oP583uzJJ4-Kis="
                className="imageDp"
              />
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
                <h5>Anirban Roy</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Phone number</h6>
              </div>
              <div className="row">
                <h5>+8801962454844</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Gender</h6>
              </div>
              <div className="row">
                <h5>Male</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Address</h6>
              </div>
              <div className="row">
                <h5>11 moulovi para khulna</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">NID Card Number</h6>
              </div>
              <div className="row">
                <h5>9182ksjhda839</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h6 className="titleColor">Date of birth</h6>
              </div>
              <div className="row">
                <h5>11 oct 1992</h5>
              </div>
            </div>
          </div>
          <div className="col-7">
            <RentedHouse />
            <div className="row complainRentHouse">
              <h6 className="titleColorReport">Report a complain to owner</h6>
            </div>
            <div className="row ">
              <div class="input-group mb-3 col-10">
                <textarea
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                ></textarea>
                <button className=" btn SearchRent resultSearch">
                  complain
                </button>
              </div>
            </div>

            <Complain name="Anirban" chat="That was fun" />
            <Complain
              name="OWashik"
              chat="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
