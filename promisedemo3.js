function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("going to start the download");
        setTimeout(function process() {
            let data = "Dummy download data";
            console.log("download completed");
            resolve(data);
        }, 10000);

        console.log("Timer to mimic download started");
    });
}

console.log("starting the process");
console.log("we are expecting to mimic a downloader");

// Call fetchData with a string argument
x = fetchData("www.google.com");

// Log when the promise resolves
x.then(function (data) {
    console.log("Downloaded data:", data);
});

console.log("new promise object created successfully, but downloading is still going on");
