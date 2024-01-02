/* CHECKLIST FOR HW
1X. Planner should state the current date at the top, below the main header.
2. Below should have time blocks for 9AM-5PM
3. Each time block should be comparing to the current time, so that it can color code to past,
present, or future
4. All time blocks should allow you to click into them, and then input info for the event of that
time block.
5. If you click save on the timeblock, is should save that text to localStorage
6. All saved items should be showing even on refresh due to localStorage.
*/

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var hourPlanner = $('#hour');
  var rowEl = $('div.col-2 col-md-1 hour text-center py-3').text();
  var today = dayjs();
  var currentDay = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDay);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // var savedBtn = $('.btn')
  // var saved = localStorage.setItem('plans');
  // savedBtn.addEventListener("click", saved);
  // var savedStorage = localStorage.getItem('plans');
  // console.log()
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  if (hourPlanner.isBefore(today)) {
    rowEl.addClass('past');
  } else if (hourPlanner.isSame(today)) {
    rowEl.addClass('present');
  } else if (hourPlanner.isAfter(today)){
    rowEl.addClass('future')
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
