/// <reference types="cypress" />

describe("Test: Dragging Shapes", () => {
  const xCoord = 150;
  const yCoord = 100;

  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });

  it("Dragging Polygon", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(4) > a > div"
    ).click();
    cy.get("#map").click(xCoord, yCoord);
    cy.get("#map").click(250, 100);
    cy.get("#map").click(250, 200);
    cy.get("#map").click(xCoord, yCoord);
    const polygon = cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g > path"
    );
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-edit.leaflet-bar.leaflet-control > div:nth-child(2) > a > div"
    ).click();
    cy.get("#map")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 200, clientY: 200 })
      .trigger("mouseup", { force: true });
    // polygon.click();
    // polygon.trigger("mousedown", {
    //   which: 1,
    //   pageX: 0,
    //   pageY: 0,
    // });
    // polygon.trigger("mousemove", {
    //   which: 1,
    //   pageX: xCoord - 150,
    //   pageY: yCoord - 150,
    // });
    // polygon.trigger("mouseup");
    // cy.get(
    //   "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g > path"
    // )
    //   .invoke("d", "d", "M339 261L441 266L346 15")
    //   .should("have.attr", "d", "M339 261L441 266L346 15");
    returnAssertion().should("have.length", 1);
  });

  const returnAssertion = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
