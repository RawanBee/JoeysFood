import { useState } from "react";
import { searchRecipes } from "../../Services";
// import debounce from "lodash.debounce";
import "./SearchBar.css";
import RecipeCard from "../Cards/RecipeCard";
import RecipesCard from "../Cards/RecipesCard";
import { useNavigate } from "react-router-dom";
import RecipesList from "./RecipesList";
import NotFound from "../Layouts/NotFound";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const changeHandler = async (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
    const data = await searchRecipes(event.target.value);
    setResults(data);
  };
  const clickHandler = (id) => {
    navigate(`/recipe/:${id}`);
  };

  const mapping = () => {
    return results.map((recipe) => {
      return (
        <div key={recipe?.id} onClick={() => clickHandler(recipe?.id)}>
          <RecipeCard recipe={recipe} />
        </div>
      );
    });
  };

  return (
    <div className="searchBarContainer">
      <input
        placeholder="Search a recipe.."
        onChange={changeHandler}
        defaultValue={query}
      />
      {results.length ? (
        <RecipesCard>{mapping()}</RecipesCard>
      ) : results.length === 0 && query.length > 0 ? (
        <NotFound />
      ) : (
        <RecipesList />
      )}
    </div>
  );
};

export default SearchBar;
