const express = require("express");
const { createMessage, getmessages } = require("../Controllers/messageController");


const router = express.Router();
router.post("/", createMessage);
router.get("/:chatId", getmessages);


module.exports = router;
