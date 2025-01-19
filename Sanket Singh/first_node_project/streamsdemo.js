const fs = require('fs');
const { Transform } = require('stream');

// Create a readable stream from the input file
let fileStream = fs.createReadStream(__dirname + "/input.txt");

// Use `process.stdout` as the output stream
let outputStream = process.stdout;

// Define a transform stream to process chunks of data
let middleStream = new Transform({
    transform(chunk, _enc, nextCB) {
        let modifiedChunk = chunk.toString().toUpperCase(); // Convert to uppercase
        this.push(modifiedChunk); // Push modified data
        setTimeout(nextCB, 1000); // Simulate async processing
    }
});

// Handle errors
fileStream.on('error', (err) => {
    console.error("Error reading input file:", err.message);
});

// Connect streams
fileStream.pipe(middleStream).pipe(outputStream);