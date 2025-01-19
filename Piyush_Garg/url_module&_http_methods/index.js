const fs = require('fs');

const http = require('http');

const url = require("url");


const myServer = http.createServer((req,res)=>{
   
    if(req.url ==="/favicon.ico") return res.end();
   
    const log = `${Date.now()}:${req.url} New Req Recieved \n`;

    const myURL=url.parse(req.url,true)
    console.log(myURL);
    fs.appendFile("log.txt",log,(err)=>{
       console.error("Error writing to log file:",err);
    })

    //Handle routes
     switch(myURL.pathname){
            case "/":
                if(req.method === 'GET') 
                res.end("HomePage");
                break;
            case "/about":
                const username = myURL.query.myname
                res.end(`Hi, ${username}`)

            case "/signup":
                if(req.method === 'GET') res.end('This is a signup form');
                else if (req.method === 'POST') {
                    
                }
                // res.end("I am Piyush Garg");
            default:
                res.end("404"); 
        
    }
});

// Start the server

myServer.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
})