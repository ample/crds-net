export class EventManager{
  //given response, pareses into current and next event
  storeResponseString(response){
    cy.log(`current respons is undefined? ${response.current} next response undefined? ${response.next}`);
    this._current = new EventModel(response.current);
    this._next = new EventModel(response.next);
  }

  get currentStream(){
    return this._current;
  }

  get nextStream(){
    return this._next;
  }
}

class DateField {
  constructor(dateString){
    this._date = new Date(dateString);//Invalid Date if dateString is invalid/undefined
  }

  get date(){
    return this._date;
  }
}


export class EventModel{
  constructor(responseEvent){
    let start;
    let end;

    if(responseEvent){
      start = responseEvent.start;
      end = responseEvent.end;
    }

    this._start = new DateField(start);
    this._end = new DateField(end);
  }

  get startDate(){
    return this._start;
  }

  get endDate(){
    return this._end;
  }

  //TODO I'm assuming Netlify's response is standard, and we'll never get a response with a start day but no end day, or vice versa.
  //If that's not true, will need to mimic the logic of our front end in calculating live status
  get isLive(){
    const now = Date.now();
    return (this.startDate.date <= now) && (this.endDate.date > now);
  }
}