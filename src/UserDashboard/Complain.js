import "./Dashboard.css";

const Complain = ({ name, chat }) => {
  return (
    <div className="row chatComplainmain">
      <div className="col-2 personChat">{name}</div>
      <div className="col-10 mes ">{chat}</div>
    </div>
  );
};

export default Complain;
