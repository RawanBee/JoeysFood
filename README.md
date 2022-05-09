# Joey's Food 

Your favorite site for recipes! Joey is only sharing food here.


#### How to run this app locally 

1.`$ npm install`  
2.`$ npm start` 
3.`$ in the main directory create .env file that includes:`
  1. REACT_APP_BASE_URL=https://api.spoonacular.com/recipes
  2. REACT_APP_API_KEY= YOUR_API_KEY
4.`$ npm start`   
5.`$ npm run cy`   


#### Design decisions

1. Sketched the UI where the home page will include 15 random items, each item is clickable to open a page for that item's info
2. Both pages have the same header, and the home page contains a search bar
3. Used pure CSS 


#### HighLights 

1. Error handling is not covering all cases
2. Poor details page design
3. Lack of pagination OR load more feature for the list of items
4. Accessability
