import "./HomeCreate.css";
import { Link, useHistory } from "react-router-dom";
import HomeItemDashboard from "./HomeItemDashboard";
const HomeCreate = () => {
  return (
    <div className="mainOwnerHome">
      <div className="leftOwner">
        <form>
          <div className="loginName">
            <label htmlFor="exampleInputEmail1" className="LoginNameTitle">
              Add A home
            </label>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputTitle"> Title</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputTitle"> Description</label>
            <textarea
              type="text"
              className="form-control "
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
            ></textarea>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1"> Address</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1"> Price</label>
            <input
              type="number"
              className="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Rent Amount"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Area</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Sonadanga</option>
              <option>Khalishpur</option>
              <option>Khulna Sadar</option>
            </select>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputphone"
              aria-describedby="emailHelp"
              placeholder="Enter Phone Number"
            />
          </div>

          <button type="submit" className="btn greenClrBtn addHomeWidth">
            Make Your Home Listing
          </button>
        </form>
      </div>
      <div className="rightOwner">
        <HomeItemDashboard />
      </div>
    </div>
  );
};
export default HomeCreate;
