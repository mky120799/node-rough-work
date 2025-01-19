console.log("Start of the file");

setTimeout(function timer1(){
    console.log("Timer 1 done");
    let y = Promise.resolve("Immediately promise");
    y.then(function promiseY(valueY){

    })
},0);

for(let i=0;i<10000000000000;i++)
{
    //something 
}

let x=Promise.resolve("Sanket's promise");

x.then(function processPromsie(value){
    console.log("whose promise ?", value);
});

setTimeout(function timer2(){
    console.log("Timer 2 done");
}, 0);

console.log("End of the file");

