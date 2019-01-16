import { EventManager } from './Models/EventModel';

export class StreamspotAPI {
  retrieveEvents() {
    const eventManager = new EventManager();
    //TODO make env variables
    cy.request({
      method: 'Get',
      url: 'https://api.streamspot.com/broadcaster/crossr30e3/broadcasts/upcomingPlusCurrent',
      headers: {'X-API-KEY': 'a0cb38cb-8146-47c2-b11f-6d93f4647389'}
    })//'GET', 'https://api.streamspot.com/broadcaster/crossr30e3/broadcasts/upcomingPlusCurrent', {'X-API-KEY': 'a0cb38cb-8146-47c2-b11f-6d93f4647389'})
      .then((response) => {
        eventManager.storeResponseString(response.body.data);
      });

    return eventManager;
  }
}