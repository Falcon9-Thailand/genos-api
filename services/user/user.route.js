const router = require("express").Router();
const {createUser} = require("./user.controoler");
// const { checkToken } = require("../../auth/token_validation");

router.post("/",createUser);
// router.get("/", checkToken,getUser);
// router.get("/:id", checkToken,getUserByUserId);
// router.patch("/", checkToken,updateUserByUserId);
// router.delete("/:id", checkToken,deleteUserByUserId);
// router.post("/login", getUserByUserEmail);

module.exports = router;