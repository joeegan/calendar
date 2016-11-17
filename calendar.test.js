import { expect } from 'chai';
import { calendarHtml, processEvents } from './calendar';

describe('The calendar', () => {

  it(`Contains an hour template for each hour in the supplied range`, () => {
  });

});

describe('Processing events', () => {

  it(`Only processes the events if they haven't been processed before`, () => {
  });

  it('Returns an html string containing the same amount of event templates as there are events in the data', () => {
  });

});

describe('Collision detection', () => {

  it(`Detects when start date collides with another event`, () => {
  });

  it(`Detects when end date collides with another event`, () => {
  });

  it(`Detects when start and end date are the same`, () => {
  });

})
