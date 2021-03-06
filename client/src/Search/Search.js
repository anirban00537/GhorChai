import Homeitem from "../Home/Homeitem/Homeitem";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Search = () => {
  const [area, setArea] = useState();
  const history = useHistory();

  const [allhomes, setHomes] = useState([]);
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };
  const getHome = async (area) => {
    const { data } = await axios.get(
      `http://localhost:5000/user/searchHome/${area}`
    );
    return data;
  };
  const onSub = async () => {
    const { homes } = await getHome(area);
    setHomes(homes);
  };

  return (
    <div className="containerSearch">
      <Navbar />
      <forn>
        <div className="inputSection">
          <input
            type="text"
            class="form-control inputSearchBox"
            id="exampleFormControlInput1"
            placeholder="Enter Your Area ex(Khalishpur)"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
          />

          <button
            className="btn btn_Search"
            onClick={() => {
              onSub();
            }}
          >
            Search
          </button>
        </div>
      </forn>
      <div className="ssrchFld">
        {allhomes.map((h) => (
          <div className="mainfile ">
            <div className="row col-9">
              <div className="col-5 homeImage ">
                <img key={h.nid} className="col homeImage" src={h.photo[0]} />
              </div>
              <div className="col-7 colDetails">
                <div className="priceAndTitle">
                  <div className="row">
                    <div className="col-7 titleHome">{h.title}</div>
                    <div className="col-5 priceHome">{h.price}TK</div>
                  </div>
                  <div className="row">
                    <p className="place col-12">{h.address}</p>
                  </div>
                  <div className="row">
                    <p className="col-12 bedroomS">{h.area}</p>
                  </div>
                  <div className="row btn-area col-12">
                    <button
                      className="btnDetails btn btn-"
                      onClick={() => {
                        toDetails(h);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
