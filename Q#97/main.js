// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.
var date_month_year = function () {
    var currentDate = new Date();
    var daynumber = currentDate.getDate();
    var day = daynumber < 10 ? '0' + daynumber : String(daynumber);
    var MonthNumber = currentDate.getMonth() + 1;
    var currentMonth = MonthNumber < 10 ? '0' + MonthNumber : String(MonthNumber);
    var currentYear = currentDate.getFullYear();
    return ("Current Date: ".concat(day, " and Current Month: ").concat(currentMonth, " and Current Year: ").concat(currentYear));
};
console.log(date_month_year());
