import "./RecipesCard.css";

const RecipesCard = (props) => {
  return (
    <div className="recipesContainer">
      {props?.children}
    </div>
  );
};

export default RecipesCard;
