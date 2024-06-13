const PromiseAnyPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let rejections = [];
    let pending = promises.length;

    if (!promises.length) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((reason) => {
          rejections.push(reason);
          pending--;
          if (pending === 0) {
            reject(new AggregateError(rejections, 'All promises were rejected'));
          }
        });
    });
  });
};

// Example usage
const promise1 = Promise.reject('Error 1');
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Success'));
const promise3 = Promise.reject('Error 3');

PromiseAnyPolyfill([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Output: Success
  })
  .catch((error) => {
    console.error(error);
  });
