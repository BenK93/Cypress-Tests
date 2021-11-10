/// <reference types="cypress" />

describe("Test: Editing Shapes", () => {
  const xCoord = 150;
  const yCoord = 100;

  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });

  it("Editing Polyline", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(2) > a > div"
    ).click();
    cy.get("#map").click(146, 250);
    cy.get("#map").click(313, 250);
    cy.get("#map").click(313, 200);
    cy.get("#map").click(140, 200);
    cy.get("#map").click(140, 200);
    // const polyline = cy.get(
    //   "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g > path"
    // );
    cy.get(".leaflet-pm-icon-edit").click();

    // dragging

    cy.wait(500);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(4)"
    )
      .trigger("mouseover")
      .trigger("mousedown", { which: 1, button: 0, force: true })
      .trigger("mousemove", {
        x: 100,
        y: 100,
        force: true,
        which: 1,
        clientX: 100,
        clientY: 100,
        screenX: 100,
        screenY: 100,
        pageX: 100,
        pageY: 100,
      })
      .trigger("mouseup", { which: 1 });

    returnAssertion().should("have.length", 1);
  });

  const returnAssertion = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
