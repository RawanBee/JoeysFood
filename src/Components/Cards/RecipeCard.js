import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="cardBoxContainer">
      <img
        src={
          recipe?.image ||
          "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
        }
        alt="Recipe's Result"
      />
      <h3>{recipe?.title}</h3>
    </div>
  );
};

export default RecipeCard;
