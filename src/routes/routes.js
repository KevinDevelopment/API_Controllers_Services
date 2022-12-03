const express = require('express');
const router = express.Router();
const insertUser = require('../controllers/insertUser');
const getUser = require('../controllers/getUser');
const updateUser = require('../controllers/updateUser');
const deleteUser = require('../controllers/deleteUser');

router.get("/user", getUser.getUsers);
router.post("/user", insertUser.createUser);
router.put("/user/:id", updateUser.updateUsers);
router.delete("/user/:id", deleteUser.deleteUsers);


module.exports = router;