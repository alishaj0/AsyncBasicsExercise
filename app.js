// ASYNC BASICS EXERCISE


// 1 - WITH CALLBACK
let name1 = "Falcon";
function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}
function falcon(n, callback){
    setTimeout(() => {
        name1 = n
        callback();
    }, 1000);
}
falcon(`Sam Wilson`, falconName);


    console.log(`==================`)


// 2 - WITH PROMISE
let name2 = "Winter Soldier";
function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}
function winterSoldier(n){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            name2 = n;
            resolve();
        }, 2000);
    });
}
winterSoldier(`Bucky Barnes`)
    .then(winterSoldierName);



// 3
let name3 = "Agent 13";
function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}

 //With Async Await
function agent13(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name3 = n; 
            resolve();
        }, 3000);
    });
}

/*
async function agent13Name(){
        // async using first function agent13Name(){}
    await agent13(`Sharon Carter`);
            // waiting for this function to complete before moving on to next line
    console.log(`Question 3`);
    console.log(name3);
}
agent13Name();
*/

// OR

async function func1(){
        // creating new async function func1(){}
    await agent13(`Sharon Carter`);
        // await agent13() function, which will update value of name3 in agent13Name() function
    agent13Name();
        // run agent13Name() function with cnosole logs and updated name3 value
}
func1();
    // running async function name func1();



// BONUS

// 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });

  // Waits until the longest (time wise) promise is complete before it runs the .then (callback)
Promise.all([p1, p2, p3])
  .then(values => console.log(values));

    // with Promise.all() we can consume 3 promises without having to do 3 seperate .then() 
    // Promise.all will take in an array of promises (all three promises into an array) and using .then to consume the values of the array of promises. 
    
