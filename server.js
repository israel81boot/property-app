const express = require("express");
const path = require("path");
var PORT = process.env.PORT || 8080;
//const routes = require("routes");
const axios = require("axios");

const app = express();  




app.use(express.urlencoded({extended:true})); 
app.use(express.json());

app.use(express.static(path.join(__dirname,'./client/public')));

if(process.env.NODE_ENV === 'production'){
app.use(express.static("./client/public"));
}
//const sequelize = require("sequelize");
//const route = require("./routes")
const db = require("./models/index");  

  //const mysql = require("mysql"); 
//app.use(routes); 
require("./routes/api")(app, db);

 
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// db.sequelize.sync().then(function() {
app.listen(PORT, function(){
    console.log("app listening on PORT:" + PORT);
}); 
// })
