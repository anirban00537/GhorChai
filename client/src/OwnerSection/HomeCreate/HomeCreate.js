import "./HomeCreate.css";
import FileBase from "react-file-base64";
import { useEffect, useState } from "react";
import { postHome } from "../../api/home";
import { useSelector, useDispatch } from "react-redux";
import { HomeAction } from "../../features/actions/Home";
import { Link, useHistory } from "react-router-dom";
const HomeCreate = () => {
  const [img, setImg] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const homeData = useSelector((state) => state.home);
  const { user } = useSelector((state) => state.user);
  const [home, setHome] = useState({
    title: "",
    description: "",
    address: "",
    price: 0,
    area: "",
    nid: "",
    phone: "",
    homeOwner: "",
  });

  useEffect(() => {
    setHome({ ...home, homeOwner: user });
    dispatch(HomeAction(user));
  }, []);
  const toDetails = (data) => {
    history.push({
      pathname: "/details",
      state: { data: data },
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    await postHome(home, img);
    setHome({
      title: "",
      description: "",
      address: "",
      price: 0,
      area: "",
      nid: "",
      phone: "",
      homeOwner: "",
    });
    dispatch(HomeAction(user));
  };

  return (
    <div className="mainOwnerHomeCreate">
      <div className="leftOwner">
        <form onSubmit={handelSubmit}>
          <div className="loginName">
            <label htmlFor="exampleInputEmail1" className="NameTitledash">
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
              value={home.title}
              onChange={(e) => {
                setHome({ ...home, title: e.target.value });
              }}
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
              value={home.description}
              onChange={(e) => {
                setHome({ ...home, description: e.target.value });
              }}
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
              value={home.address}
              onChange={(e) => {
                setHome({ ...home, address: e.target.value });
              }}
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1"> Add Photo (Atlest 5)</label>
            <FileBase
              type="file"
              multipla={false}
              onDone={({ base64 }) => setImg([...img, base64])}
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
              value={home.price}
              onChange={(e) => {
                setHome({ ...home, price: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Area</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={home.area}
              onChange={(e) => {
                setHome({ ...home, area: e.target.value });
              }}
            >
              <option>Sonadanga</option>
              <option>Khalishpur</option>
              <option>Khulna Sadar</option>
            </select>
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1">NID</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputnid"
              aria-describedby="emailHelp"
              placeholder="Enter Nid Number"
              value={home.nid}
              onChange={(e) => {
                setHome({ ...home, nid: e.target.value });
              }}
            />
          </div>
          <div className="form-group addHomeWidth">
            <label htmlFor="exampleInputEmail1">Phone Number</label>
            <input
              type="text"
              className="form-control "
              id="exampleInputphone"
              aria-describedby="emailHelp"
              placeholder="Enter Phone Number"
              value={home.phone}
              onChange={(e) => {
                setHome({ ...home, phone: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn greenClrBtn addHomeWidth">
            Make Your Home Listing
          </button>
        </form>
      </div>
      <div className="rightOwner">
        {homeData.map((m) => (
          <div className="submittedHome">
            <div className="photoSectionDash">
              {/* {m.photo.map((im) => (
                <img className="innerImg" src={im} />
              ))} */}
              <img className="innerImg" src={m.photo[0]} />
            </div>
            <div className="titleDemoLittle">
              <p>{m.title}</p>
            </div>
            <div className="btn_cover">
              <button className="btn btn_del btn-sm">Delete</button>

              <button
                className="btn btn_del btn-sm"
                onClick={() => {
                  toDetails(m);
                }}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeCreate;
