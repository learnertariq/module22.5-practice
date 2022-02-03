////////////// Problem: print fibonacci series from 0 to 30 cycle
// declear a fibonacci empty array
// declear a counter = 0
// decrear a cycle = 5
// create a function named recursiveFunc
// in every iteration counter++;
// if counter == cycle return false
// otherwise return call the func itself
//log the fibonacci array

function fibonacciWithRecurtion(cycle) {
  const fibonacciArr = [0, 1];
  let counter = 2;

  function recursiveFunc() {
    if (counter >= cycle) return false;
    fibonacciArr.push(fibonacciArr[counter - 1] + fibonacciArr[counter - 2]);
    counter++;

    return recursiveFunc();
  }
  recursiveFunc();

  return fibonacciArr;
}

console.log(fibonacciWithRecurtion(11));
