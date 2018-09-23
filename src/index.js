class Sorter {
  constructor() {
    this.newArray=[];
    this.compareFunction=function(a,b)
    {
    return a-b;
    };
    // your implementation
  }

  add(element) {
    this.newArray.push(element);
    // your implementation
  }

  at(index) {
    return this.newArray[index];
    // your implementation
  }

  get length() {
    return this.newArray.length;
    // your implementation
  }

  toArray() {
    return this.newArray;
    // your implementation
  }

  sort(indices) {
    indices.sort();
    var i;
    var array = [];

    for(i = 0; i < indices.length; i++){
      array[i]=this.newArray[indices[i]];
    }

      array.sort(this.compareFunction);
    
    
    for(i = 0; i < array.length; i++) {
      this.newArray[indices[i]] = array[i];
    }

    return this.newArray;  // your implementation
  }

  setComparator(compareFunction) {
    this.compareFunction=compareFunction;
    // your implementation
  }
}

module.exports = Sorter;
