function sum1(a) {
  return a + a;
}

sum1.power = 2;
console.log(sum1(2));
console.log(sum1.power);
console.log(sum1.prototype);

// now you can say function is also a prototype and also a function type
// js is prototypial lang

// object and new 

function userName(username, score) {
  this.username = username;
  this.score = score;
}

userName.prototype.increment = function () {
  this.score++;
};

userName.prototype.printMe = function () {
  console.log(`print ${this.score}`);
};

const abhi = new userName('abc',124)
const sonu =  new userName('bcd',100)

abhi.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/