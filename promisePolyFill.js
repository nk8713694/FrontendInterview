function PromisePolyFill(executor) {
  let onResolve, onReject, isFulfilled, isCalled, value, isRejected;
  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  function resolve(val) {
    isFulfilled = true;
    value = val;

    // in synchronious operastion onresolve is not a function :

    // so we will check and see whether this is a function

    if (typeof onResolve === 'function') {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;

    value = val;

    if (typeof onReject === 'function') {
      onReject(val);
      called = true;
    }
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve('data recieved');
  }, 3000);
});

const examplePromise2 = new PromisePolyFill((resolve, reject) => {
  reject('data recieved');
});

examplePromise2.then((data) => {
  console.log('doone', data);
});

// if u want expose resolve then

PromisePolyFill.resolve = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    resolve(val);
  });
};

PromisePolyFill.reject = (val) => {
  return new PromisePolyFill(function executor(resolve, reject) {
    reject(val);
  });
};

//  all PolyFill

Promise.allPloyFill = (promises) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let penidng = promise.length;
    if (!promises.length) {
      resolve(results);
      return;
    }

    let pendingpromises = promises.length;

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          results[idx] = res;
          pending--;

          if (pending == 0) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
