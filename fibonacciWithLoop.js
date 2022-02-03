////////////// Problem: print fibonacci series from 0 to 30 cycle
// create a function named fibonacci which takes a parameter of cycle
//// declear an fibonacci array inside the function
//// iterate until you finish the iteration
////// add the two numbers of last 2 index
////// push the sum into the fibonacci array.
//// return the fibonacci array
//call the function with cycle arg

function fibonacci(cycle) {
  const fibonacciArr = [0, 1];
  for (let i = 2; i < cycle; i++) {
    const currentNum = fibonacciArr[i - 1] + fibonacciArr[i - 2];
    fibonacciArr.push(currentNum);
  }

  return fibonacciArr;
}

console.log(fibonacci(11));
