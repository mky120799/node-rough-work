const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("p1 Success"),3000);
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("p2 rejected"),1000);
})

const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("p3 success"),2000);
})


/*

Promise.all([p1,p2,p3]).then((res)=>{
    console.error(res);
})

*/

Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch((err)=>{
    console.error(err);
});


