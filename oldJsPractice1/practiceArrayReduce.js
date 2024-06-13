const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const val = arr.reduce(function (accumulator, val, i) {
  accumulator += val;
  console.log(i);
  return accumulator;
});

console.log(val);
