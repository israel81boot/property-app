const router = require("express").Router(); 
const housesController = require("../../controllers/homescontrollers");


router.route("/")
.get(housesController.findAll)
.post(housesController.create); 

router 
 .route("/:id")
 .get(housesController.findById)
 .put(housesController.update)
 .delete(housesController.remove);

 module.exports = router;