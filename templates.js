import { template } from 'lodash';

const hourTemplate = template(`
  <div class='hour <%= lastClass %>'>
    <div class=hour_info>
      <time class='time_wrap time_wrap_hour'>
        <span class=time><%= hour %></span>
        <span class=am><%= amPm %></span>
      </time>
      <time class=half>
        <%= halfHour %>
      </time>
      <% if (timeLast) { %>
        <time class='time_wrap time_wrap_last'>
          <span class=time><%= timeLast %></span>
          <span class=am><%= amPm %></span>
        </time>
      <% } %>
    </div>
    <div class='hour_space'></div>
  </div>
`);

const eventTemplate = template(`
  <div class='event'
       style='top: <%= top %>px;
              height: <%= height %>px;
              width: <%= W %>;
              left: <%= left %>;
              '>
    <h1>Sample item</h1>
    <h2>Sample location</h2>
  </div>
`);

const eventContainerTemplate = `<div id='events' />`;

module.exports = { hourTemplate, eventContainerTemplate, eventTemplate };
