class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.compareFunction = (a, b) => {
      return a - b;
    }
  }
  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return Array.from(this.arr);
  }

  sort(indices) {
    // your implementation
    for (let k = 0; k < indices.length-1; k++) {
      for (let m = 1; m < indices.length; m++) {
        if (indices[k] > indices[m]) {
          let x;
          x = indices[k];
          indices[k] = indices[m];
          indices[m] = x;
        }
      }
    }

    for (let k = 0; k < indices.length-1; k++) {
      for (let m = 1; m < indices.length; m++) {
        // console.log(this.arr[indices[k]]);
        if (this.compareFunction(this.arr[indices[k]], this.arr[indices[m]]) > 0) {
          let x;
          x = this.arr[indices[k]];
          this.arr[indices[k]] = this.arr[indices[m]];
          this.arr[indices[m]] = x;
        }
      }
      
    }
  }
  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }

}

module.exports = Sorter;