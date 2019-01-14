
describe('Testing the Countdown Banner on the Live page:', function () {
  before(function () {
    cy.visit('live/');
  });

  it('Banner content displayed should match streaming status according to the Streamspot API', function () {
    //get status from Streamspot api - should not be undefined
    //If not running, check not running is displayed
    //If running, check running is displayed
  });
});