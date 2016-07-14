'use strict';

// Closure is a function that keeps access to the outer scope even when the function that contains the closure is already been executed.

function foo(x,y) {
  return function() {
    return x + y;
  }
}

var x = foo(3,4);

console.log(x());
console.log(x());
