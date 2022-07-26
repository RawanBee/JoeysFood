import { getRecipeById } from "../Services";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Header, RecipesCard, Loading, RecipeInfo } from "../Components";
import DOMPurify from 'dompurify';

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

  // const toParagraph = (string) => string?.replace(/<[^>]+>/g, ""); // without applying html rules
  
  const sanitizer = DOMPurify.sanitize; // without it; potential XSS attack could happened
  const toParagraph = (string) => <div dangerouslySetInnerHTML={{__html: sanitizer(string)}}/>

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
