function addition(a, b) {
    return a + b;
  }


// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  console.log(doubleAddition(65,34));