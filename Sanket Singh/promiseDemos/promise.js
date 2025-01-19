function  fetchCustom(url,fn){// we are mimicing the fetch function
    // downlaod content of the url
    // this downloading can take sometime
    // we will download the content from url, and then whatever is the result, we will pass to the callback

    console.log("Starting downloading");
    setTimeout(function process(){
        console.log("Downloading completed");
        let response = "Dummy data";
    },3000);

}

let response = fetchCustom("www.google.com")