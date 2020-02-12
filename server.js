const express = require("express");

var PORT = process.env.PORT || 8080;
//const routes = require("routes");
const axios = require("axios");

const app = express();

app.use(express.static("./client/public"));

app.use(express.urlencoded({extended:true})); 
app.use(express.json());
const mysql = require("mysql2"); 
const sequelize = require("sequelize");

var db = require("./models/index.js");
app.use(routes); 
//require("./routes/api")(app, db);

db.sequelize.sync().then(function() {
app.listen(PORT, function(){
    console.log("app listening on PORT:" + PORT);
}); 
})
