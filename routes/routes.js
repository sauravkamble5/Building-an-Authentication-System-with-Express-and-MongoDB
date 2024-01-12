const router = require("express").Router();
const userController = require("../controllers/userController");
const middleware = require("../middleware/auth");


router.get("/users", middleware.authenticate, userController.getUser);

router.post("/register", userController.createUser);


module.exports = router;
