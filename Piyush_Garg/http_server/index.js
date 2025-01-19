const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${new Date().toISOString()}: New Request Received\n`;
    
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }
        res.end("Hello from the server again");
    });
});

const PORT = 8000;
myServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));