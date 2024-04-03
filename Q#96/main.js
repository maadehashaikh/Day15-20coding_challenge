//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
var sumcalculate = function (numbers) {
    return numbers.reduce(function (acc, curent) { return acc + curent; }, 0);
};
var numbers = [20, 10, 30, 90];
console.log(sumcalculate(numbers));
