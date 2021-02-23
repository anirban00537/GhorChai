import "./homeItemDashboard.css";

const HomeItemDashboard = () => {
  return (
    <div className="mainHomeOWner">
      <div className="houseListtitle">
        <h6>House List By You</h6>
      </div>
      <div className="imageOwnerrow">
        <div
          id="carouselExampleControls"
          className="carousel slide slideLeftSide"
          data-ride="carousel"
        >
          <div className="carousel-inner imageOwner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://brabbu.com/blog/wp-content/uploads/2019/02/Design-Inside-best-home-designs-capa-750x410.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://brabbu.com/blog/wp-content/uploads/2019/02/Design-Inside-best-home-designs-capa-750x410.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="detailsRightSide">
          <h6>
            Include jQuery first, then a Bootstrap JavaScript bundle. For more
            information about what’s included in Bootstrap, please see our
          </h6>

          <div className="row roomPriceOWner">
            <div className="col-4">
              <h5 className="priceOWner ">34000TK</h5>
            </div>
          </div>
          <div className="row roomPriceOWner">
            <div className="col-6">
              <h6 className="graySec ">Sonadanga</h6>
            </div>
            <div className="col-6 graySec">
              <p>01962454844</p>
            </div>
          </div>
          <div className="graySec">
            <h5 className="detailsHome">11 moulovi para khulna</h5>
          </div>
          <div className="graySec">
            <p className="detailsHome">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing
            </p>
          </div>
          <div className="row">
            <button className="btn col-6">Edit</button>
            <button className="btn col-6">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItemDashboard;
