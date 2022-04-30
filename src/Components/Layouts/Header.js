import "./Header.css";
const Header = () => {
  return (
    <div className="mainHeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "/assets/recipesLogo.png"}
        alt="Joey's Food Logo"
      />
        <hr />
    </div>
  );
};

export default Header;
