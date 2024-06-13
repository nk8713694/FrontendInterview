function shallowCopyWithoutSlice(obj) {
  if (obj == null || typeof obj != 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return [...obj];
  }

  return { ...obj };
}

const originalArray = [1, 2, 3, { nested: 'object' }];

const shallowCopiedArray = shallowCopyWithoutSlice(originalArray);

console.log(shallowCopiedArray);
console.log(shallowCopiedArray === originalArray); // Should be false
console.log(shallowCopiedArray[3] === originalArray[3]);
