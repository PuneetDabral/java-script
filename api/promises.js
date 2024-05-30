const promiseOne = new Promise((res, rej) => {
  // do async task
  setTimeout(() => {
    console.log("async task-1");
    res();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promiseConsume");
});

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("async task-2");
    res();
  }, 1000);
}).then(() => {
  console.log("done");
});

new Promise((res, rej) => {
  setTimeout(() => {
    res({ userName: "puneet" });
  }, 1000);
}).then((val) => {
  console.log(val);
});

const promiseFour = new Promise((res, rej) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      res({ userName: "puneet" });
    } else {
      rej("we are getting some error");
    }
  }, 1000);
});

promiseFour
  .then((val) => {
    console.log(val);
    return val.userName;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("finally call"));

//   try{

//   }catch(err){}

const promiseFive = new Promise((res, rej) => {
  setTimeout(() => {
    let err = true;
    if (!err) {
      res({ userName: "abhi" });
    } else {
      rej("Error : we are getting some error");
    }
  }, 1000);
});

const consumeFive = async () => {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

consumeFive();


// fetch has an priory que for doing task

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
s