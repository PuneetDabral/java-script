// js and class
// oop
// object :- collection of properties and method
// toLowerCase

// why use oop

// object literal

// constructor function
// prototypes
// classes
// instances (new / this)

// 4 pillors
// abstraction :-  primarily serves the purpose of simplifying complex systems by hiding implementation details. It allows programmers to focus on essential features of objects without needing to understand how they work internally.

// encapsulation :- in software systems, encapsulation refers to the bundling of data with the mechanisms or methods that operate on the data. It may also refer to the limiting of direct access to some of that data

// inheritance - child inherit some ablity to parent is called inheritance
// polymorphism - So polymorphism is the ability (in programming) to present the same function or method for differing underlying forms (data types).

// object literal
// let userName = {
//   name: "puneet",
//   getUser: function () {
//     // current context that goes to this userName object
//     console.log(this.name);
//   },
// };

// console.log(userName.getUser());

// here we need this because for evry function this execution context made and and in that execution context we dont know what is name because it is declare outside so we need need for giving them context we are taking about this name (it refers to current object name key)

// if you print this globaly to that time it is empty but in window this gives you window object

// constructor

// const promiseOne = new Promise((resolve, reject) => {

// }) Promise();

function User(userName) {
   // this userName is a example of polymorphism
  // here this refer to global or emply object
  this.userName = userName;
//   example of abstraction
  this.greet = function () {
    console.log(this.userName);
  };

  // even we dont need this because it implicitly return this

  return this;
}

// because of this issue second one value overrides first one it cause issue that why we need new keyword for this so that in each time User got new instance
// Constructor function always give you new instance because of this new keyword and this

// new is basically for new instance
// and this refer for emply object there in that function mean it goes to global context that is empty
let userName = new User("puneer");
let userName1 = new User("abhi");



console.log(userName);
console.log(userName1);
