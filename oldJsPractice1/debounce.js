function debounce(callBack, delay) {
  let timerId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callBack.apply(context, args);
    }, delay);
  };
}

// Your original function
function handleClick() {
  console.log('Button clicked!');
}

// Debounced version of the function
const debouncedClick = debounce(handleClick, 200);

// Attach the debounced function to the button click event
document.getElementById('myButton').addEventListener('click', debouncedClick);

// from algoexpert.io

function debounce(callBack, delay, immediate = false) {
  let timerId;

  return function (args) {
    clearTimeout(timerId);

    if (immediate == true && timerId == null) {
      callBack.apply(this, args);
    } else {
      timerId = setTimeout(() => {
        callBack.apply(this, args);
        timerId = null;
      }, delay);
    }
  };
}

function debounce(callBack, delay, immediate = false) {
  let timerId;

  return function (args) {
    clearInterval(timerId);

    if (immediate == true && timerId == null) {
      callBack.apply(this, args);
    } else {
      setTimeout(() => {
        callBack.apply(this, args);
        timerId = null;
      }, delay);
    }
  };
}
