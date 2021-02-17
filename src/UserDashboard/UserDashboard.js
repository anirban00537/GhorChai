import Navbar from "../Navbar/Navbar";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="UserDashboard">
        <div className="row mainSearchfield">
          <div class="input-group mb-3 col-5">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button className=" btn SearchRent ">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
