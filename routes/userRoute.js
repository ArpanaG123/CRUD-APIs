const express = require('express');
const createUserDetails = require('../controllers/createUser');
const errorHandler = require('../middleware/errorHandler');
const updateUserDetails = require('../controllers/updateUser');
const deleteUserDetails = require('../controllers/deleteUser');
const getUserDetails = require('../controllers/getUser');

const router = express.Router();

router.post("/create",errorHandler,createUserDetails);
router.put("/update/:id",errorHandler,updateUserDetails);
router.delete("/delete/:id",errorHandler,deleteUserDetails);
router.get("/fetch",errorHandler,getUserDetails);

module.exports = router;