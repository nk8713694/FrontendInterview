function iterate(obj) {
  for (let property in obj) {
    this.configArray.push({
      key: property,
      children: [],
      isValue: false,
      value: '',
    });
    if (obj.hasOwnProperty(property)) {
      const index = Object.keys(obj).indexOf(property);
      if (typeof obj[property] == 'object') {
        this.iterate(obj[property]);
      } else {
        this.configArray[index].children.push({
          key: property,
          value: obj[property],
          isValue: true,
          children: [],
        });
      }
    }
  }
}
