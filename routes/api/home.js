const router = require("express").Router(); 
const homesController = require("../../controllers/homescontrollers");
//const connect = require("config.json");

router.route("/")
.get(homesController.findAll)
.post(homesController.create); 

router 
 .route("/:id")
 .get(homesController.findById)
 .put(homesController.update)
 .delete(homesController.remove);

 module.exports = router;