function foo(...args) {
    return arguments;
  }
  console.log(foo(1, 2, 3)); // { "0": 1, "1": 2, "2": 3 }