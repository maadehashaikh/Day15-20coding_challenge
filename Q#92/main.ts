// Question 92: Write a function to remove the last element from an array and return the removed element.
// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
let dishes:string[] = ["biryani","shawarma","karhai"];
const poped_elemnt = () => {
 let popElemnt = dishes.pop();
 return popElemnt;
}

console.log(poped_elemnt());