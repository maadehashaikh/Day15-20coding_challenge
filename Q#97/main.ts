// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.


const  date_month_year = ()=>{
const currentDate = new Date();
const daynumber = currentDate.getDate();
const day = daynumber <10 ? '0' + daynumber :  String(daynumber); 
const MonthNumber = currentDate.getMonth()+ 1; 
const currentMonth = MonthNumber < 10 ? '0' + MonthNumber :String(MonthNumber) 
const currentYear = currentDate.getFullYear();
return (`Current Date: ${day} and Current Month: ${currentMonth} and Current Year: ${currentYear}`)
}
console.log(date_month_year())

