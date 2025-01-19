const promise = new Promise((resolve, reject)=>{
    reject('Failure!');
});


promise.then(value => {
    console.log('Fulfilled:', value);
},error => {
    console.log('Caught error', error);
})


.finally(()=>{
    console.log("this will always be executed");

})
