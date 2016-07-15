function doubleIt(x) { return x * 2; }

function transform(arr, fn) {
  var list = []

  for (let i=0;i<arr.length;i++) {
    list[i] = fn(arr[i]);
  }
  return list
}

console.log(transform([1,2,3,4,5], doubleIt));
