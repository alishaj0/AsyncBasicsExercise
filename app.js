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
            reject();
        }, 2000);
    });
}
winterSoldier(`Bucky Barnes`)
    .catch(winterSoldierName);



// 3

let name3 = "Agent 13";
function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}

 //With Promise because I can not make it work with async await. I don't know what I'm doing wrong. 
 
function agent13(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            name3 = n; 
        }, 3000);
    });
}
agent13(`Sharon Carter`)
     .then(agent13Name);






