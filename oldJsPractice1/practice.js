function x() {
  setTimeout(() => {
    console.log(i);
  }, 1000);
  var i = 1;
}

x();
