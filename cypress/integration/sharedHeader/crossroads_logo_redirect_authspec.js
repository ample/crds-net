import { RouteValidator } from '../../support/RouteValidator';
import { fred_flintstone } from '../../fixtures/test_users';

function clickCrossroadsLogoAndConfirmNetlifyHomepageLoads() {
  cy.get('#crds-shared-header-logo').as('crossroadsLogo').click();
  RouteValidator.pageFoundAndFromNetlify(`${Cypress.config().baseUrl}/`);
}

describe('As a signed-in user, clicking the Crossroads logo from a non-Netlify page should load the Netlify homepage:', function () {
  beforeEach(function () {
    cy.login(fred_flintstone.email, fred_flintstone.password);
  });

  it.skip('(DE6319) Starting from /corkboard', function (){
    cy.visit('corkboard/');

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it.skip('Starting from /childcare', function (){
    cy.visit('childcare/');

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });

  it('Starting from /serve-signup', function (){
    cy.visit('serve-signup/');

    clickCrossroadsLogoAndConfirmNetlifyHomepageLoads();
  });
});