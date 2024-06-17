let tatkal = new Promise((resolve, reject)=>{
    let game = Math.floor(Math.random() * 2);
    // let game = 0;
    if (game == 0){
        resolve(game);
    }
    else{
        return reject(game);
    }
})

function success(head){
    console.log("Success!", head);
}
function fail(toe){
    console.log("Fail!", toe);
}

tatkal.then(success)
    .catch(fail)

//----------------------------------------------------------------
// tatkal.then((head)=> {
//     console.log("Success!", head);
// })
// .catch((toe)=> {
//     console.log("Error!", toe);
// })


//----------------------------------------------------------------


// Method-2

function User(){
    return new Promise((resolve, reject)=>{
        let PersonDetails={
            name : "John",
            age: 21
        }
        if(PersonDetails.name == "John"){
            resolve (PersonDetails)
        }
        else{
            reject();
        }
    })
}

function Details(person){
    console.log(person);
}

function error(){
    console.log("Error!")
}

User().then(Details).catch(error)


//Promise.all, Promise.allsettled, promise.any, promise.race, 


let promise1 = new Promise((resolve,reject)=>{
    let isBool=true;
    if(isBool){
        setTimeout(resolve,3000,"Pravin")
    }
    else{
        reject("Pravin Not Reached");
    }
})

let promise2 = new Promise((resolve,reject)=>{
    let isBool=true;
    if(isBool){
        setTimeout(resolve,2000,"Kavin")
    }
    else{
        reject("Kavin Not Reached");
    }
})

let promise3 = new Promise((resolve,reject)=>{
    let isBool=false;
    if(isBool){
        setTimeout(resolve,1000,"Nivash")
    }
    else{
        reject("Nivash Not Reached");
    }
})


Promise.all([promise1, promise2, promise3]).then((msg)=>{
    console.log("Promise.All", msg);
})
.catch((err)=>{
    console.log("Promise.All",err);
})


Promise.allSettled([promise1, promise2, promise3]).then((msg)=>{
    console.log("Promise.allSettled",msg);
})
.catch((err)=>{
    console.log("Promise.allSettled",err);
})


Promise.any([promise1, promise2, promise3]).then((msg)=>{
    console.log("Promise.any",msg);
})
.catch((err)=>{
    console.log("Promise.any",err);
})

Promise.race([promise1, promise2, promise3]).then((msg)=>{
    console.log("Promise.race",msg);
})
.catch((err)=>{
    console.log("Promise.race",err);
})

