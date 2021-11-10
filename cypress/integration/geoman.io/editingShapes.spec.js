/// <reference types="cypress" />

describe("Test: Editing Shapes", () => {
  const xCoord = 150;
  const yCoord = 100;

  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });

  it("Editing Polyline", () => {
    cy.get(".leaflet-pm-icon-polyline").click();
    cy.get("#map").click(146, 250);
    cy.get("#map").click(313, 250);
    cy.get("#map").click(313, 200);
    cy.get("#map").click(140, 200);
    cy.get("#map").click(140, 200);
    cy.get(".leaflet-pm-icon-edit").click();
    cy.wait(1000);

    // dragging
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(1)"
    )
      .trigger("mouseover")
      .trigger("mousedown", { which: 1, force: true })
      .trigger("mousemove", {
        clientX: 300,
        clientY: 300,
      })
      .trigger("mouseup", { force: true });

    fatherOfShapesElement().should("have.length", 1);
  });

  const fatherOfShapesElement = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
