import "./Error.css";

const Error = ({ msg }) => {
  return (
    <div className="errorContainer">
    <div className="center"></div>
    <p>{msg}</p>
  </div>
  );
};

export default Error;
