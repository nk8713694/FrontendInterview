// Promise.race returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.

const PromiseRacePolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

// Example usage
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));

PromiseRacePolyfill([promise1, promise2]).then((value) => {
  console.log(value); // Output: one
});
