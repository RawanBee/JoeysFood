import "./RecipesCard.css";
import PropTypes from "prop-types";

const RecipesCard = (props) => {
  const {children} = props
  return (
    <div className="recipesContainer">
      {children}
    </div>
  );
};

RecipesCard.propTypes = {
  children: PropTypes.element,
};

export default RecipesCard;
