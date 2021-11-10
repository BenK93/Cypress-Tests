/// <reference types="cypress" />
describe("Test:Zoom Button", () => {
  beforeEach(() => {
    cy.visit("https://geoman.io/geojson-editor");
  });
  //   zoom in
  it("Max Zoom In", () => {
    const zoomInBtn = cy.get(".leaflet-control-zoom-in");
    let counterClicks = 0;
    while (counterClicks < 6) {
      counterClicks++;
      zoomInBtn.click();
    }
    zoomInBtn.should("have.class", "leaflet-disabled");
  });
  //   zoom out
  it("Max Zoom Out", () => {
    const zoomOutBtn = cy.get(".leaflet-control-zoom-out");
    let counterClicks = 0;
    while (counterClicks < 15) {
      counterClicks++;
      cy.wait(200);
      cy.get(".leaflet-control-zoom-out").click();
    }
    zoomOutBtn.should("have.class", "leaflet-disabled");
  });
});
