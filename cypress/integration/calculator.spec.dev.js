"use strict";

it('should check 5+2 equals 7', function () {
  cy.visit("http://127.0.0.1:5500");
  cy.get(".five").click();
  cy.get(".add").click();
  cy.get(".seven").click();
  cy.get(".equals").click();
  cy.get("#history").should('contain', '5+7');
  cy.get("#output").should('contain', '12');
});
it('should check the prev output minus 4 is 8', function () {
  cy.get(".subtract").click();
  cy.get(".four").click();
  cy.get(".equals").click();
  cy.get("#history").should('contain', '12-4');
  cy.get("#output").should('contain', '8');
});