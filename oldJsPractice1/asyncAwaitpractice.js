function myFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('hello bro hwo are uuu');
      resolve('daata brahhhh');
    }, 5000);
  });
}

const asyncFunc = async () => {
  const result = await myFunc();

  console.log(result);
};

asyncFunc()
  .then((res) => {
    console.log('hiiiii', res);
  })
  .catch(() => {
    console.error('errro');
  });
