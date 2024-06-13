const PromiseAllSettledPolyfill = (promises) => {
  return new Promise((resolve) => {
    let results = [];
    let pending = promises.length;

    if (!promises.length) {
      resolve(results);
      return;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((value) => {
          results[idx] = { status: 'fulfilled', value };
        })
        .catch((reason) => {
          results[idx] = { status: 'rejected', reason };
        })
        .finally(() => {
          pending--;
          if (pending === 0) {
            resolve(results);
          }
        });
    });
  });
};

// Example usage
const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Error');

PromiseAllSettledPolyfill([promise1, promise2]).then((results) => {
  console.log(results);
  // Output: [{ status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Error' }]
});
