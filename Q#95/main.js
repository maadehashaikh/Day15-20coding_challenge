// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.con
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
var return_greater_10_numb = function (numbers) {
    return numbers.filter(function (number) { return number > 10; });
};
var numbers = [20, 9, 57, 43, 5];
console.log(return_greater_10_numb(numbers));
