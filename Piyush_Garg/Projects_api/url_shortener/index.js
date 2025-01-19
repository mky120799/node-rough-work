const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const app = express();

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });


    app.get("/url/:shortId", async (req, res) => {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
          {
            shortId,
          },
          {
            $push: {
              visitHistory: {
                timestamp: Date.now(),
              },
            },
          }
        );
        res.redirect(entry.redirectURL);
      });

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});