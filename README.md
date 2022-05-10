# Joey's Food 

Your favorite site for recipes! Joey is only sharing food here https://joeys-food.netlify.app/


#### How to run this app locally 

-`in the main directory create .env file that includes:` 
  - REACT_APP_BASE_URL=https://api.spoonacular.com/recipes  
  - REACT_APP_API_KEY= YOUR_API_KEY  
1.`$ npm install`  
2.`$ npm start`   
- `to run the tests:`   
3.`$ npm run cy`   


#### Design decisions

1. Sketched the UI where the home page will include 15 random items, each item is clickable to open a page for that item's info
2. Both pages have the same header, and the home page contains a search bar
3. Used pure CSS 


#### HighLights 

1. Error handling is not covering all cases
2. Poor details page design
3. Lack of pagination OR load more feature for the list of items
4. Accessability


#### Lessons learned 

- It is been a while since I last used ReactJS without a state management library, considering the components tree and avoiding props drilling were fun to deal with.

