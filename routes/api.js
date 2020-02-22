
function Api(app, db){
   // getting all data
   app.get("/api/all", (req, res)=>{
      db.house.findAll({}).then((result)=>{
         console.log(result);
         res.json(result);
      });
   });
   // Create nes House
   app.post("/api/new-house", (req, res)=>{
      db.house.create(req.body).then((result) =>{
         res.json(result);
      })
   } );
   // Editing existing house
   app.post("/api/edit-house", (req, res)=>{
      db.house.update(req.body, {where:{id: req.body.id}}).then((result)=>{
         res.json(result);
      });
   })

   // Deleting house
   app.get("/api/delete/:id", (req, res)=>{
      var selectedID = req.params.id;
      db.house.destroy({where:{id : selectedID}}).then((result)=>{
         res.json(result);
      })
   })
}

module.exports = Api;