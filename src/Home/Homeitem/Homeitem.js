import "./HomeHouses.css";

const Homeitem = () => {
  return (
    <div className="mainfile">
      <div className="row col-9">
        <div className="col-5 homeImage ">
          <img
            className="col homeImage"
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
        </div>
        <div className="col-7 colDetails">
          <div className="priceAndTitle">
            <div className="row">
              <div className="col-7 titleHome">
                Nice house with 5bedroom and 1 bathroom
              </div>
              <div className="col-5 priceHome">13000TK</div>
            </div>
            <div className="row">
              <p className="place col-12">11 moulovi para, Khulna</p>
            </div>
            <div className="row">
              <p className="col-12 bedroomS">5 BEDROOM</p>
            </div>
            <div className="row btn-area col-6">
              <button className=" btn btnRent btn-">Rent now</button>
              <button className="btnDetails btn btn-">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeitem;
