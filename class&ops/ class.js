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
}


const chai = new user('puneet','puneet@gmail','abdc')
console.log(chai.encrpytPassword())