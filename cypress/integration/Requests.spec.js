/// <reference types="cypress" />

describe("API requests", () => {
  
  it("Fetch 15 random recipes", async () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=6ae1126e12284ec1883625ddc741cbc2&query=chicken&number=15"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body.results).to.have.length(15);
    });
  });

  it("Search result", () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=6ae1126e12284ec1883625ddc741cbc2&query=orange&number=15"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });

  it("Fetch recipe's details", () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/637876/information?apiKey=6ae1126e12284ec1883625ddc741cbc2"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });
});
