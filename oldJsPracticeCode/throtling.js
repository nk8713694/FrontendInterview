function throttle(func, delay) {
  let lastExecuted = 0;
  let timerId;

  return function (...args) {
    const now = Date.now();

    const remainingTime = Math.max(lastExecuted + delay - now, 0);

    clearTimeout(timerId);

    if (remainingTime == 0) {
      lastExecuted = now;
      func.apply(this, args);
    } else {
      timerId = setTimeout(() => {
        lastExecuted = now; // Corrected variable name
        func.apply(this, args);
      }, remainingTime);
    }
  };
}

function logger() {
  console.log('log');
}

const app = throttle(logger, 1000);

// Call the throttled function multiple times in quick succession
app();
setTimeout(app, 200); // Call again after 200 milliseconds
setTimeout(app, 500); // Call again after 500 milliseconds
setTimeout(app, 700); // Call again after 700 milliseconds
