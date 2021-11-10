/// <reference types="cypress" />
describe("Test: Deleting Shapes", () => {
  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });
  //   deleting circle
  it("Deleting Custom Circle", () => {
    cy.get(".leaflet-pm-icon-circle").click();
    cy.get("#map").click(250, 220);
    cy.get("#map").click(250, 120);
    cy.get(".leaflet-pm-icon-delete").click();
    cy.get("#map").click(250, 200);
    fatherOfShapesElement()
      .find("path")
      .should(($path) => {
        expect($path).to.have.length(0);
      });
  });
  //   deleting simple circle
  it("Deleting Simple Circle", () => {
    cy.get(".leaflet-pm-icon-circle-marker").click();
    cy.get("#map").click(250, 220);
    cy.get(".leaflet-pm-icon-delete").click();
    cy.get("#map").click(250, 220);
    fatherOfShapesElement()
      .find("path")
      .should(($path) => {
        expect($path).to.have.length(0);
      });
  });

  const fatherOfShapesElement = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
