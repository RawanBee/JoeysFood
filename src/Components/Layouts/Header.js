import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/`);
  };
  return (
    <div className="mainHeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "/assets/recipesLogo.png"}
        alt="Joey's Food Logo"
        onClick={clickHandler}
      />
        <hr />
    </div>
  );
};

export default Header;
