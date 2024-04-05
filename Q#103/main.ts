// Question 103: Write a function that returns a random boolean value, true or false.
// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.
 const random_true_false = () => {
  let random_num = Math.floor(Math.random() *10) + 1;
  if(random_num < 5){
    return true;
  }
  else{
    return false;
  }
 }
 console.log(random_true_false())