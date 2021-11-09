/// <reference types="cypress" />
describe("Test:Creating Shapes", () => {
  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });
  //   regular click circle
  it("Creating Regular Circle", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(6)"
    ).click();
    cy.get("#map").click(250, 320);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    ).should("have.length", 1);
  });
  //   custom circle
  it("Creating Custom Circle", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(5) > a > div"
    ).click();
    cy.get("#map").click(250, 220);
    cy.get("#map").click(250, 150);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    ).should("have.length", 1);
  });
  //   custom polygon
  it("Creating Polygon", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(4) > a > div"
    ).click();
    cy.get("#map").click(250, 320);
    cy.get("#map").click(200, 320);
    cy.get("#map").click(180, 250);
    cy.get("#map").click(250, 320);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    ).should("have.length", 1);
  });
  //   custom polyline
  it("Creating Polyline", () => {
    cy.get(
      "#map > div.leaflet-control-container > div.leaflet-top.leaflet-left > div.leaflet-pm-toolbar.leaflet-pm-draw.leaflet-bar.leaflet-control > div:nth-child(2) > a > div"
    ).click();
    cy.get("#map").click(146, 250);
    cy.get("#map").click(313, 250);
    cy.get("#map").click(313, 200);
    cy.get("#map").click(140, 200);
    cy.get("#map").click(140, 150);
    cy.get("#map").click(100, 150);
    cy.get("#map").click(100, 150);
    cy.get(
      "#map > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-overlay-pane > svg > g"
    ).should("have.length", 1);
  });
});
