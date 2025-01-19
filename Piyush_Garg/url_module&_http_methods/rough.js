const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`;

    // Append log to the file
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });

    // Handle routes
    switch (req.url) {
        case "/":
            res.end("HomePage");
            break;
        case "/about":
            res.end("I am Piyush Garg");
            break;
        default:
            res.end("404");
    }
});

// Start the server
myServer.listen(3000, () => {
    console.log("Server is listening on port 3000");
});