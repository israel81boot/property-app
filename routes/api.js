
function Api(app, db){
   app.get("/api/all", (req, res)=>{
      db.house.findAll({}).then((result)=>{
         console.log(result);
         res.json(result);
      });
   });
}

module.exports = Api;