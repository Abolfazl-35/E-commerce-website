const express = require("express");
const { registerUser,loginUser, findUser, getUsers, verifyEmail, verification } = require("../Controllers/userControllers");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", findUser);
router.get("/", getUsers);
router.post("/verify-email", verifyEmail);
router.post("/verifacation", verification);


module.exports = router;
