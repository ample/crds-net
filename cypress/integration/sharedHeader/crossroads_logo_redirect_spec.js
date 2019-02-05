import { RouteValidator } from '../../support/RouteValidator';

function clickCrossroadsLogoAndConfirmNetlifyHomepageLoads() {
  cy.get('#crds-shared-header-logo').as('crossroadsLogo').click();
  RouteValidator.pageFoundAndFromNetlify(`${Cypress.config().baseUrl}/`);
}

describe('Clicking the Crossroads logo from a non-Netlify page should load the Netlify homepage:', function () {
  it('(DE6317) Starting from /search', function () {
    cy.visit('search/');

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it('(DE6319) Starting from /corkboard', function () {
    cy.visit('corkboard/', { timeout: 10000 });

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it('Starting from /leaveyourmark', function () {
    cy.visit('leaveyourmark/');

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });
});

describe('Clicking the Crossroads logo from a Netlify page should load the Netlify homepage:', function () {
  it('Starting from /serve', function () {
    cy.visit('serve/');
    RouteValidator.pageShouldBeFromNetlify();

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it.skip('Starting from /live', function () {
    cy('live/');
    RouteValidator.pageShouldBeFromNetlify();

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it('Starting from /giving', function () {
    cy.visit('giving/');
    RouteValidator.pageShouldBeFromNetlify();

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });
});