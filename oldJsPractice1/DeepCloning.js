function deepClone(obj) {
  if (obj == null || typeof obj != 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newarray = [];
    for (var i = 0; i < obj.length; i++) {
      newarray[i] = deepClone(obj[i]);
    }

    return newarray;
  }

  if (typeof obj === 'object') {
    const newobj = {};

    for (var key in obj) {
      newobj[key] = deepClone(obj[key]);
    }

    return newobj;
  }
}

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
  hobbies: ['reading', 'traveling'],
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject);
console.log(clonedObject === originalObject); // Should be false (different objects)
console.log(clonedObject.address === originalObject.address); // Should be false (nested objects are also cloned)
console.log(clonedObject.hobbies === originalObject.hobbies);
