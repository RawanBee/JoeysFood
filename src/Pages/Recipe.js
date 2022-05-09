import { getRecipeById } from "../Services";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Header, RecipesCard, Loading, RecipeInfo } from "../Components";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [recipeLoad, setRecipeLoad] = useState(false);

  let { id } = useParams();

  const fetchData = useCallback(async () => {
    setRecipeLoad(true);
    const data = await getRecipeById(id);
    setRecipe(data);
    setRecipeLoad(false);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toParagraph = (string) => string?.replace(/<[^>]+>/g, "");

  return (
    <>
      <Header />
      {recipeLoad ? (
        <Loading />
      ) : (
        <RecipesCard>
          <RecipeInfo recipe={recipe} toParagraph={toParagraph} />
        </RecipesCard>
      )}
    </>
  );
};

export default Recipe;
