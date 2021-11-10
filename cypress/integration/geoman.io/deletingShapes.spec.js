/// <reference types="cypress" />
describe("Test: Deleting Shapes", () => {
  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });
  //   zoom in
  it("Deleting Circle", () => {
    cy.get(".leaflet-pm-icon-circle").click();
    cy.get("#map").click(250, 220);
    cy.get("#map").click(250, 120);
    cy.get(".leaflet-pm-icon-delete").click();
    cy.get("#map").click(250, 200);
    returnElement()
      .find("g")
      .should(($g) => {
        expect($g).to.have.length(0);
      });
  });

  const returnElement = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
