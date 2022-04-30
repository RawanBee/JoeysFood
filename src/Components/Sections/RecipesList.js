import { getRecipes } from "../../Services";
import { useEffect, useState } from "react";
import RecipeCard from "../Cards/RecipeCard";
import RecipesCard from "../Cards/RecipesCard";
import { useNavigate } from 'react-router-dom';

const RecipesList = () => {
  const navigate = useNavigate();

  const [random, setRandom] = useState([]);

  const fetchData = async () => {
    const data = await getRecipes();
    setRandom(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandler = (id) => {
    navigate(`/recipe/:${id}`);
  };

  const mapping = () => {
    return random.map((recipe) => {
      return (
        <div key={recipe?.id} onClick={() => clickHandler(recipe?.id)}>
          <RecipeCard recipe={recipe} />
        </div>
      );
    });
  };

  return <RecipesCard>{mapping()}</RecipesCard>;
};

export default RecipesList;
