'use strict';

// Use filter for simple list exclusion/inclusion

function isOdd(x) {
  return x % 2 == 1;
}

// filter implementation
function excl(arr, fn) {
  var list = [];

  for (let i=0;i<arr.length;i++) {
    if (fn(arr[i])) {
      list.push(arr[i]);
    }
  }

  return list;
}

console.log(excl([1,2,3,4,5], isOdd));

// native filter
console.log([1,2,3,4,5].filter(isOdd));
