'use strict';


// Manual implementation of reduce
// 1 is default value for moltiplication, 0 for sum
function mult(x,y) {
  return x * y;
}

function compose(arr, fn, initial) {
  var total = initial;

  for (let i=0;i<arr.length;i++) {
    total = fn(total,arr[i]);
  }

  return total;
}

console.log(compose([1,2,3,4,5], mult, 1));
