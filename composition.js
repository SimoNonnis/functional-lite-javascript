'use strict';

// Composition, the return value of a function is the input of another function
// Manual composition

function sum(x,y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

var z = sum(mult(3,4), 5);
console.log('Manual composition: ', z);

// wrapper
function multAndSum(x,y,z) {
  return sum(mult(x,y), z);
}

var zz = multAndSum(3,4,5);
console.log('Wrapper: ', zz);

// composition Utility
function compose(f1,f2) {
  return function compose1(x,y,z) {
    return f2(f1(x,y),z);
  }
}

var zzz = compose(mult,sum)(3,4,5);
console.log('Compositon utility: ', zzz);
