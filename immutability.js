'use strict';

var x = 2;
x++; // allowed

//const y = 3;
//y++ // not allowed!

const z = [4,5,6];
//z = 10; // not allowed!
z[0] = 10; // allowed

const w = Object.freeze([4,5,6]);
//w = 10; // not allowed!
//w[0] = 10; // not allowed!

var arr = [3,4,5];
//doubleThemMutable(arr);
var arr2 = doubleThemImmutable(arr);

console.log('Original array: ', arr);
console.log('Immutable: ', arr2);

function doubleThemMutable(list) {
  for (let i=0;i<list.length;i++) {
    list[i] = list[i] * 2;
  }
}

function doubleThemImmutable(list) {
  var newList = [];
  for (let i=0;i<list.length;i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
}
