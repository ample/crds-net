import { StreamspotAPI } from '../../Streamspot/StreamspotAPI';

describe('Testing the Countdown Banner on the Live page:', function () {
  let eventManager;

  before(function () {
    eventManager = new StreamspotAPI().retrieveEvents();
    cy.visit('live/');
  });

  it.skip('DEBUG sees what streamspot is returning', function(){
    cy.log(`current stream live? ${eventManager.currentStream.isLive} next stream live? ${eventManager.nextStream.isLive}`);
  });

  it.only('Banner should display countdown and "Remind Me" button when steream is not live', function(){
    //TODO stub responses so stream starts in x hours
    cy.get('[data-automation-id="banner-stream-countdown"]').as('liveStreamCountdown');
    cy.get('@liveStreamCountdown').should('be.visible');
    //TODO check the days&hours&minutes(maybe) are correct per the stubbed response

    cy.contains('Remind Me').as('remindMeButton');
    cy.get('@remindMeButton').should('be.visible');

  });

  it('Banner should display "Watch Now" button when stream is live', function(){
    //stub responses so stream starts in x hours
  });

  it('Banner content displayed should match streaming status according to the Streamspot API', function () {
    //get status from Streamspot api - should not be undefined
    //If not running, check not running is displayed
    //If running, check running is displayed
  });
});