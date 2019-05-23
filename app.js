// Load our app server using express somehow..
const express = require('express');
const app = express();
const router = require('./routes/user.js');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('short'));
// app.use(morgan("combined"));
app.use(express.static("./public"));
app.use(router);

app.use("/", (req, res) => {
  console.log(">>>>>>>>>>>>>>>",req.body.userName, req.body.passWord);

  if(!req.body.userName){
      let fileName = "loader.html";
      let options = { root: path.join(__dirname, '/public') }
      console.log(options.root,fileName);
      res.sendFile(fileName, options, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

  } else if (req.body.userName == "-"){
      let fileName = "login.html";
      let options = { root: path.join(__dirname, '/public') }
      console.log(options.root,fileName);
      res.sendFile(fileName, options, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Sent:', fileName);
        }
      });

    } else {
      let fileName = "start.html";
      let options = { root: path.join(__dirname, '/public') }
      console.log(options.root,fileName);
      res.sendFile(fileName, options, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Sent:', fileName);
        }
      });
    }
});
app.use(/*default redirect when not found*/(req, res) => {
    res.status(404).send("Not found!");
});
app.listen(3003, () => {
    console.log("Server is up and listening on port 3003")
});