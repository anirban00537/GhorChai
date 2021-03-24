import Homeitem from "../Home/Homeitem/Homeitem";
import Navbar from "../Navbar/Navbar";
import "./Search.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import searchImage from "./undraw_house_searching_n8mp.png";
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
  // useEffect(() => {
  //   onSub();
  // }, []);
  const getHome = async (area) => {
    const { data } = await axios.get(
      `http://localhost:5000/user/searchHome/${area}`
    );
    return data;
  };
  const onSub = async () => {
    const { homes } = await getHome(area);
    // const h=homes.filter((house)=>house)
    setHomes(homes);
  };

  return (
    <div className="containerSearch">
      <Navbar />
      <forn>
        <div className="inputSection">
          <input
            type="text"
            className="form-control inputSearchBox"
            id="exampleFormControlInput1"
            placeholder="Enter Your Area EX
            (Khalishpur)"
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
      {allhomes.length == 0 ? (
        <div className="imageEmptyContainer">
          {" "}
          <img src={searchImage} className="imageEmpty" />
          <h2>No Home</h2>
        </div>
      ) : (
        <div className="ssrchFld">
          {allhomes.map((h) => (
            <div className="mainfileser ">
              <div className="homeImageContainer">
                <img key={h.nid} className="homeImage" src={h.photo[0]} />
              </div>
              <div className="colDetails">
                <div className="priceAndTitle">
                  <div className=" titleWithMoney">
                    <div className="titleHome">{h.title}</div>
                  </div>
                  {/* <div className="addressArea">
                      <p className="place ">{h.address}</p>
                      <p className=" bedroomS">{h.area}</p>
                    </div> */}

                  <div className="btnHomeItem">
                    <button
                      className="btnDetails btn btn-sm"
                      onClick={() => {
                        toDetails(h);
                      }}
                    >
                      <i class="fas fa-calendar-week"></i>

                      <div> Details</div>
                    </button>
                    <p className="place ">{h.address}</p>
                    <p className=" bedroomS">{h.area}</p>
                    <div className=" priceHome">{h.price}TK</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
