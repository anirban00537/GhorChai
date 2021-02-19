import Homeitem from "../Home/Homeitem/Homeitem";
import Navbar from "../Navbar/Navbar";
import "./Search.css";

const Search = () => {
  return (
    <div className="containerSearch">
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
            <button className=" btn SearchRent resultSearch">Search</button>
          </div>
        </div>
        <div className="row ">
          <p className="mainSearchfield resultSearch">
            <b>22 </b> results found
          </p>
        </div>
        <div className="">
          <Homeitem />
          <Homeitem />
          <Homeitem />
        </div>
      </div>
    </div>
  );
};

export default Search;
