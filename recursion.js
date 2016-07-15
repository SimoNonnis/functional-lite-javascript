'use strict';

// Recursion is a function calling itself until it reaches the base case
// the bigger problem with recursion is not cpu, is memory.


function sumInt() {
  var sum = 0;
  for (let i=0;i<arguments.length;i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log('Non recursive sum: ', sumInt(1,1,1,1,1,1));

// ES5
function sumRecursive() {
  var args = [].slice.call(arguments);
  if (!args.length) {
    return 'Please, give some input!';
  } else if (args.length == 1) {
      return args.toString();
  } else if (args.length <= 2) {
    return args[0] + args[1];
  } else {
    return args[0] + sumRecursive.apply(null,args.slice(1));
  }
}

console.log('Recursive ES5 sum: ', sumRecursive(5,5));

// ES2015
function sumRecursive1(...args) {
  if (!args.length) {
    return 'Please, give some input!';
  } else if (args.length == 1) {
      return args.toString();
  } else if (args.length <= 2) {
    return args[0] + args[1];
  } else {
    return args[0] + sumRecursive1(...args.slice(1))
  }
}

console.log('Recursive ES2015 sum: ', sumRecursive(10,10,10));


// multiplication
function multRecursive(...args) {
  if (!args.length) {
    return 'Please, give some input!';
  } else if (args.length == 1) {
      return args.toString();
  } else if (args.length <= 2) {
    return args[0] * args[1];
  } else {
    return args[0] * multRecursive(...args.slice(1));
  }
}

console.log('Recursive ES2015 multi: ', multRecursive(5,5,5,5));
