// es6
class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  // method
  encrpytPassword() {
    return this.password;
  }

  changeU
}


const chai = new user('puneet','puneet@gmail','abdc')
console.log(chai.encrpytPassword())


// behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// /workspaces/java-script/class&ops/ class.js
// /workspaces/java-script/class&ops/class.js