class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(this.userName)
    }
}

class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email=email;

    }

    addCourse(){
        console.log(this.userName);
    }
}


const teacher = new Teacher('puneet','abc@.com');

const user = new User('puneet')
user.logMe()

// console.log(teacher===user)
console.log(teacher instanceof User)

teacher.addCourse()
teacher.logMe()