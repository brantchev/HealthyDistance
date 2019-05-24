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

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Health-2019',
    database: 'healthdb'
});


function sendHTML(fileName, res){
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

app.use("/", (req, res) => {
  console.log(">>>>>>>>>>>>>>>",req.body.userName, req.body.passWord);
  if(!req.body.userName){
    sendHTML("loader.html", res);

  } else if (req.body.userName == "-"){
    sendHTML("login.html", res);

    } else {
      const queryString = "SELECT * FROM healthdb.users WHERE userName=? AND passWord=? LIMIT 1"
      connection.query(queryString, [req.body.userName, req.body.passWord], (err,rows,fields) => {
        console.log("checking user/pass combination");
        console.log(rows.length, rows);
        if (err) {
            console.log(err);
            return false;
        } else if (rows.length > 0){
          sendHTML("start.html", res);
        } else {
          sendHTML("login.html", res);
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