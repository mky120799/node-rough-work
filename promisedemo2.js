function demo1(val){
    return new Promise(resolve,reject){
        console.log("start");
        setIimeout(function process(){
            console.log("completed timer");;
            if(val%2==0){
                // even number
            resolve("even");
            }
            else{
                //odd number
                reject("odd")
            }
        })
        console.log("completed timer")
    }
}