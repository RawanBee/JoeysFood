/// <reference types="cypress" />

describe("API requests", () => {
  
  it("Fetch 15 random recipes", async () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=c2342877c143422fb29ad9a064107b37&query=chicken&number=15"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
      expect(response.body.results).to.have.length(15);
    });
  });

  it("Search result", () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=c2342877c143422fb29ad9a064107b37&query=orange&number=15"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });

  it("Fetch recipe's details", () => {
    cy.request(
      "GET",
      "https://api.spoonacular.com/recipes/637876/information?apiKey=c2342877c143422fb29ad9a064107b37"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });
});
