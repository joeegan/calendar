import { range } from 'lodash';

function getHours(morningTimeStart, eveningTimeEnd) {
  return range(morningTimeStart, eveningTimeEnd).map((n, i, { length }) => {
    const isPastMidday = n > 11;
    const hour = isPastMidday ? n - 12 : n;
    return {
      hour: hour == 0 && isPastMidday ? 12 : hour,
      isPastMidday,
    }
  });
}

module.exports = { getHours };
