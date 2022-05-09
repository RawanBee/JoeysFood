import "./SearchBar.css";

const SearchBar = ({ changeHandler, query }) => {
  return (
    <div className="searchBarContainer">
      <input
        placeholder="Search a recipe.."
        onChange={changeHandler}
        defaultValue={query}
      />
    </div>
  );
};

export default SearchBar;
