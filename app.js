import { calendarHtml, processEvents } from './calendar';
import initialData from './data';

window.layOutDay = function(events) {
  const eventsElement = document.querySelector(`#calendar #events`);
  eventsElement.innerHTML = processEvents(JSON.stringify(events));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#calendar').innerHTML = calendarHtml;
  window.layOutDay(initialData);
});
