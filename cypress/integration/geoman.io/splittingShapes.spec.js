/// <reference types="cypress" />

describe("Test: Splitting Shapes", () => {
  const xCoord = 50;
  const yCoord = 50;

  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });

  it("Splitting Polygon to 2 Polygons", () => {
    // Slitting the Polygon to 2 separated polygons - like Ron said
    cy.get(".leaflet-pm-icon-polygon").click();
    cy.get("#map").click(xCoord, yCoord);
    cy.get("#map").click(250, 50);
    cy.get("#map").click(250, 250);
    cy.get("#map").click(xCoord, yCoord);
    cy.get(".leaflet-pm-icon-cut").click();
    cy.wait(500);
    cy.get("#map").click(100, 100);
    cy.get("#map").click(100, 50);
    cy.get("#map").click(250, 50);
    cy.get("#map").click(250, 100);
    cy.get("#map").click(130, 130);
    cy.get("#map").click(100, 100);
    fatherOfShapesElement().should("have.length", 1);
  });

  const fatherOfShapesElement = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
