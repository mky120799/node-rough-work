/***
 * const p = new Promise((resolve, reject) =>{
    resolve("Promise Resolved Value");

});

// always returns a promise

async function getData(){
    return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));


***/


const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Promise resolve value!!");
    },5000);
});


const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promsie Resolved Value!!");
    },10000);
});


// await can only be used inside an async function

/*
async function handlePromise(params) {
    console.log("Hello World!!");
    //JS Engine was waiting for promise to resolved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("namaste JavaScript 2");
    console.log(val2);

}
*/

/// when the control encouters the await keyword the whole async function goes out the call and given to the runtime 





/**
 * 
 *   how to use fetch API
 * 
 * */ 

const API_URL = "http://invalidarandoumurl";

// async can only be used inside an async function

async function handlePromise() {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);

}

handlePromise().catch((err)=> console.log(err));