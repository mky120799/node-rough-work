function fetchData(ur){
    return new Promise(function (resolve,reject){
        console.log("going to start the download");
        setTimeout(function process(){
            let data = "Dummy download data";
            console.log("download completed");
            resolve(data);

        },10000);

        console.log("Timer to mimic download started");

    });
}


console.log("starting the progress");

console.log("we are expecting to micic a downloader");

x=fetchData(www.google.com)

console.log("new proomise object created succesfully, but downloading still going on");
