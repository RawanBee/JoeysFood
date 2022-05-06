import { getRecipes } from "../../Services";
import { useEffect, useState } from "react";
import RecipeCard from "../Cards/RecipeCard";
import RecipesCard from "../Cards/RecipesCard";
import { useNavigate } from "react-router-dom";
// import Error from "../Layouts/Error";

const RecipesList = () => {
  const navigate = useNavigate();

  const [random, setRandom] = useState([]);
  // const [error, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(false);

  const fetchData = async () => {
    const data = await getRecipes();
    // if (data?.message) {
    //   setError(true);
    //   setErrorMsg(data?.message);
    // } else {
      setRandom(data);
    // }
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

  return (
    // <>
    //   {error ? (
    //     <Error msg={errorMsg} />
    //   ) : (
        <RecipesCard>{mapping()}</RecipesCard>
    //   )}
    // </>
  );
};

export default RecipesList;
