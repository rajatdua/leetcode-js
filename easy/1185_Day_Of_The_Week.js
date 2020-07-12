/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const dayOfTheWeek = function(day, month, year) {
  // let dayValue = new Date(`${day}-${month}-${year}`).getDay();
  /*
   * Sakamoto Algorithm
   * https://www.quora.com/How-does-Tomohiko-Sakamotos-Algorithm-work
   */
  let yearBoolean = year;
  let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
  yearBoolean -= month < 3;
  let dayAsNumber = Math.floor((yearBoolean + Math.floor(yearBoolean / 4) - Math.floor(yearBoolean / 100) +
    Math.floor(yearBoolean / 400) + t[month - 1] + day) % 7);

  switch(dayAsNumber){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
};

const alternativeSolution = (day, month, year) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date(`${month}/${day}/${year}`).getDay()];
};

console.log(dayOfTheWeek(31,8,2019)); // Saturday
console.log(dayOfTheWeek(18,7,1999)); // Sunday
console.log(dayOfTheWeek(15,8,1993)); // Sunday
