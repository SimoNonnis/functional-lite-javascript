'use strict';


function foo(v) {
	return function(){
		return v;
	};
}

function add(x,y) {
	return x + y;
}

function add2(fn1,fn2) {
	return add(fn1(),fn2());
}


console.log(add2(foo(10), foo(42)));


// takes n functions as array - with for loop
function addn(arr) {
  var sum = 0;

  for (let i=0;i<arr.length;i++) {
    sum = add2(foo(arr[i]), foo(sum));
  }

  return sum;
}



console.log(addn([10,42,56,73]));


// 6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.
//
// 7. Filter your array to only have even numbers in it.
//
// 8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).
//
// 9. Bonus: write tests for your functions.
