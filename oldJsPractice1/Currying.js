function sum(...args) {
  const add = function (...nextargs) {
    if (nextargs.length == 0) {
      return args.reduce((a, b) => a + b, 0);
    } else {
      return sum(...args, ...nextargs);
    }
  };

  return add;
}

console.log(sum(1)(2)(30)());
