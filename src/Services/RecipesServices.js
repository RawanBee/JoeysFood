import axios from "axios";
const base_Url = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getRecipes = () => {
  return axios(`${base_Url}/complexSearch?number=75&apiKey=${apiKey}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data?.data?.results || [];
    })
    .catch((err) => {
      return err;
    });
};

export const getRecipeById = (id) => {
  let recipeId = id.substring(1);
  return axios(`${base_Url}/${recipeId}/information?apiKey=${apiKey}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data?.data || {};
    })
    .catch((err) => {
      return err;
    });
};

export const searchRecipes =(query)=> {
    return axios(`${base_Url}/complexSearch?apiKey=${apiKey}&query=${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data?.data?.results || [];
      })
      .catch((err) => {
        return err;
      });
  };