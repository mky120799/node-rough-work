function dummyPromise(){
    return new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve("Timers' promsis")
     },10000);
    });
}

console.log("Start of the file");


setTimeout(function timer1(){
    console.log("timer 1 done");
    let y = dummyPromise();
    y.then(function promise)
})