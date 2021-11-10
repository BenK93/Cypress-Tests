/// <reference types="cypress" />

describe("Test: Dragging Shapes", () => {
  const xCoord = 150;
  const yCoord = 100;

  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });

  it("Dragging Polygon", () => {
    cy.get(".leaflet-pm-icon-polygon").click();
    cy.get("#map").click(xCoord, yCoord);
    cy.get("#map").click(250, 100);
    cy.get("#map").click(250, 200);
    cy.get("#map").click(xCoord, yCoord);
    cy.get(".leaflet-pm-icon-drag").click();
    cy.wait(500);
    cy.get(".leaflet-pm-draggable")
      .trigger("mouseover")
      .trigger("mousedown", { which: 1, force: true })
      .trigger("mousemove", {
        clientX: xCoord + 150,
        clientY: yCoord + 150,
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
