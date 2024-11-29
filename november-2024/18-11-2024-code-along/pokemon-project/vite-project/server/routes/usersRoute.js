const express = require("express");
const getAllUsers = require("../controllers/usersControllers");

const router = express.Router();

router.get("/all", getAllUsers);

module.exports = router;
