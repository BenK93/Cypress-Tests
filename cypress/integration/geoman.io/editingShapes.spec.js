/// <reference types="cypress" />

describe("Test: Editing Shapes", () => {
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
    cy.get(".leaflet-pm-icon-edit").click();

    // dragging

    cy.wait(500);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(1)"
    )
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 100, clientY: 100 })
      .trigger("mouseup", { force: true });

    // cy.get(
    //   "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(1)"
    // ).trigger("mousedown", { which: 1 });

    // cy.get(
    //   "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(1)"
    // ).trigger("mousemove", { clientX: 100, clientY: 100 });
    // cy.wait(500);
    // cy.get(
    //   "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > div:nth-child(1)"
    // ).trigger("mouseup", { force: true });
    returnAssertion().should("have.length", 1);
  });

  const returnAssertion = () => {
    return cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    );
  };
});
