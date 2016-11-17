import {
  memoize,
  range,
  inRange,
  partialRight,
} from 'lodash';
import { getHours } from './time';
import {
  hourTemplate,
  eventTemplate,
  eventContainerTemplate,
} from './templates';
import initialData from './data';

/*
 * @return True is there is another event happening within supplied start & end times
 */
function detectCollision(start, end, events) {
  return events.some(ev => {
    const withinRange = partialRight(inRange, ev.start, ev.end + 1);
    return withinRange(start) || withinRange(end);
  });
}

/*
 * @type {string} The HTML of the calendar
 */
const calendarHtml = getHours(9, 21).map(({ hour, isPastMidday }, idx, { length }) => {
  const isLast = idx + 1 === length;
  return hourTemplate({
    hour: `${hour}:00`,
    halfHour: `${hour}:30`,
    amPm: isPastMidday ? `PM` : `AM`,
    lastClass: isLast ? `last` : null,
    timeLast: isLast ? `${hour + 1}:00` : null,
  });
}).join('') + eventContainerTemplate;

/*
 * @type {function} Plots the data onto the calendar
 * @param {eventsString} stringified JSON, to ensure memoisation
 * @return {string} Events as HTML
 */
const processEvents = memoize((eventsString) => {
  return JSON.parse(eventsString).map(({ start, end }, i, events) => {
    const otherEvents = events.filter((ev, idx) => i !== idx);
    const hasCollision = detectCollision(start, end, otherEvents);
    return eventTemplate({
      top: start,
      height: end - start,
      left: hasCollision && (i % 2 === 0) ? 'calc(50% + 5px)'  : '10px',
      W: hasCollision ? 'calc(50% - 15px)' : 'calc(100% - 20px)',
    });
  }).join('');
});

module.exports = { calendarHtml, processEvents };
