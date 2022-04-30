import { getRecipeById } from "../Services";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Header, RecipesCard } from "../Components";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  let { id } = useParams();

  const fetchData = useCallback(async () => {
    const data = await getRecipeById(id);
    setRecipe(data);
  }, [id]);

  getRecipeById(id);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toParagraph = (string) => string?.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <Header />
      <RecipesCard>
        <div className="recipeDetailsContainer">
          <img
            src={
              recipe?.image ||
              "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png"
            }
            alt="Recipe's Result"
          />
          <h3>{recipe?.title || ""}</h3>
          {recipe?.summary?.length ? (
            <div className="recipeSummary">
              <p>
                <b>Summary</b>
              </p>
              {toParagraph(recipe?.summary)}
            </div>
          ) : (
            <></>
          )}
          {recipe?.instructions?.length ? (
            <div className="recipeSummary">
              <p>
                <b>Instructions</b>
              </p>
              {toParagraph(recipe?.instructions)}
            </div>
          ) : (
            <></>
          )}
        </div>
      </RecipesCard>
    </>
  );
};

export default Recipe;
