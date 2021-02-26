import "./homeItemDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { HomeAction } from "../../features/actions/Home";
import Navbar from "../Navbar/Navbar";
const HomeItemDashboard = ({ m }) => {
  const { user } = useSelector((state) => state.user);
  const home = useSelector((state) => state.home);
  console.log("home,from dash", home);

  const dispatch = useDispatch();
  console.log(home.length);
  // home.map((m) => {
  //   console.log(m.title);
  // });
  useEffect(() => {
    dispatch(HomeAction(user));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="row">
          <div class="col imgContainer">
            <img
              className="col item"
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
            <img
              className="col item"
              src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
            />
            <img
              className="col item"
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div className="col DetailsContainer">
            {/* //details */}

            <p className="details">Details</p>
            <h3 className="title">Nice house with 5bedroom and 1 bathroom</h3>
            <p className="address">11 moulovi para khulna</p>
            <button className=" btn btnRent btn-">Rent now</button>
            <div className="row ">
              <div className="col-3">
                <p className="bedbath">5 bedroom</p>
              </div>
              <div className="col-3">
                <p className="bedbath">1 bathroom</p>
              </div>
              <div className="col-3">
                <p className="bedbath">1 balcony</p>
              </div>
            </div>

            <p className="totalDetais">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItemDashboard;
