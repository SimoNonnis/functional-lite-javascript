// An impure function is a function that produces a side-effect.
// Side-effect are actions like changing variables outside of the
// body function, I/O, ajax calls, database queries and even console.log().

var y = 2, z = 3;

function foo(x) {
  y = y * x;
  z = z * x;
}

foo(5);
console.log('First foo() call: ',y, z);
foo(5);
console.log('Second foo() call: ',y, z);

// Pure function has no side-effects
// Give the same input it return same output
// You pass everything a function needs as parameters

function bar(x,y,z) {
  function foo(x) {
    y = y * x;
    z = z * x;
  }

  foo(x);

  return [y,z];
}

console.log(bar(5,2,3));
console.log(bar(5,10,15));
