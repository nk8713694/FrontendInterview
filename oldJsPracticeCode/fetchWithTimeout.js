///
//
//
//
//
//

//

const fetchWithTimeout = function (url, timeout) {
  return new Promise(function (resolve, reject) {
    const controller = new AbortController();
    const signal = controller.signal;

    let timerid = null;

    fetch(url, { signal })
      .then((resp) => resp.json())
      .then((resp) => {
        clearTimeout(timerid);
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });

    timerid = setTimeout(() => {
      console.log('aborted');
      controller.abort();
    }, timeout);
  });
};

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 5000)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
