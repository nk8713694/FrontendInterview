console.log('start');
function subscribeTheVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Subscribe');
      resolve('resolve called ');
      new Error('Subscribe to me ');
      console.log('end promise');
    }, 1000);
  });
}

function likeTheVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Subscribe');
      reject('resolve called ');
      new Error('Subscribe to me ');
      console.log('end promise');
    }, 1000);
  });
}

function commentonTheVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Subscribe');
      new Error('Subscribe to me '); // koi edffect nahi hoga
      console.log('end promise');
    }, 1000);
  });
}

const promises1 = subscribeTheVideo();

promises1
  .then((response) => {
    console.log('Response ' + response);
  })
  .catch((err) => {
    console.log('Error ' + err);
  });
