function setUserName(username){
    // complax db call
    this.username=username;
   
}

function createUser (username,email,password){
    // this call holds refrance
    // we can pass this from create user function because which exection complee setUserName context is remove from memory and what ever the varible which are created in that function are also remove to hold that value we can use createUser function this 
    setUserName.call(this,username)
    this.email=email;
    this.password=password;

}

const user = new  createUser('puneet','puneet@syook.com',1234)

console.log(user)