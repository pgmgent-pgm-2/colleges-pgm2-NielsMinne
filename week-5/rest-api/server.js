const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const postRouter = require('./routes/postRoutes.js');

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(postRouter);


app.listen(PORT, () => {
    console.log(`Onze server is aan het luisteren op http://localhost:${PORT}`);
})
