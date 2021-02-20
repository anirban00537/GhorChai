import "./Dashboard.css";
const RentedHouse = () => {
  return (
    <div>
      <div className="row container">
        <div className="col-4">
          <div className="row imgRent">
            <img
              className="homeImagerent"
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />
          </div>
        </div>
        <div className="col-8 ">
          <div className="row">
            <h6 className="CurrentRent">Currently Renting</h6>
          </div>
          <div className="row">
            <p className="titleRen">Nice house with 5bedroom and 1 bathroom</p>
          </div>
          <div className="row">
            <p className="addressRent">11 Moulovi Para Khulna</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentedHouse;
