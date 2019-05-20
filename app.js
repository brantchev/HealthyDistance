// Load our app server using express somehow..
const express = require('express');
const app = express();
const router = require('./routes/user.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));
// app.use(morgan("combined"));
app.use(express.static("./public"));
app.use(router);

app.get('/', (req, res) => {
    console.log("Responding to root route");
    res.send("Hello from ROOOOOT!");
});

app.listen(3003, () => {
    console.log("Server is up and listening on port 3003")
});