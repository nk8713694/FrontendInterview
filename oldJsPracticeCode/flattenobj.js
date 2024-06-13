function processObject(myobjects, args) {
  const ans = {};

  for (const key in myobjects) {
    if (myobjects.hasOwnProperty(key)) {
      const val = myobjects[key];

      if (typeof val === 'function') {
        ans[key] = val(...args);
      } else if (typeof val === 'object' && val != null) {
        ans[key] = processObject(val, args);
      } else {
        ans[key] = val;
      }
    }
  }
  return ans;
}

// Example nested object
const nestedObject = {
  key1: 'value1',
  key2: [1, 2, 3],
  key3: {
    subkey1: 'subvalue1',
    subkey2: (arg1, arg2) => arg1 + arg2,
    subkey3: [4, 5, 6],
  },
  key4: (x, y) => x * y,
};

// Example arguments for functions
const functionArguments = [2, 3];

// Process the nested object
const processedObject = processObject(nestedObject, functionArguments);

console.log(processedObject);
