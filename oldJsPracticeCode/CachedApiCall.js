let cachedApiCall = (time) => {
  let cachedData = {};

  return async function (url, config = {}) {
    const key = `1234`;

    const entry = cachedData[key];

    if (!entry || entry.expiry < Date.now()) {
      let resp = await fetch(url, config);
      resp = await resp.json();
      console.log('fresh api call');
      cachedData[key] = { value: resp, expiry: Date.now() + time };
    } else {
      console.log(' cached value');
    }

    return cachedData[key].value;
  };
};

const call = cachedApiCall(1500);

call('https://jsonplaceholder.typicode.com/comments', {}).then((a) => {
  console.log('a', a);
});

setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => {
    console.log('b', a);
  });
}, 800);
