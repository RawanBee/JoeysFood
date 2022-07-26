import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  /*
The useNavigate() hook is introduced in the React Router v6 to replace 
the useHistory() hook. In the earlier version, the useHistory() hook accesses 
the React Router history object and navigates to the other routers using the 
push or replace methods. It helps to go to the specific URL, forward or backward pages.
  */

  const clickHandler = () => {
    navigate(`/`);
  };
  return (
    <header className="mainHeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "/assets/recipesLogo.png"}
        alt="Joey's Food Logo"
        onClick={clickHandler}
        loading="lazy"
      />
      <hr />
    </header>
  );
};

export default Header;
