const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')

const {userModel} = require('../models/userModel');

router.get('/', userController.getUsers)
// router.post('/add', userController.addUser)
router.put("/update/:id", userController.updateUser);
router.put("/updateAdmin/:id", userController.updateAdmin);
router.put("/resetPassword", userController.resetPassword);
router.post("/updateAdmin/:id/:val", userController.Update)
router.post("/updateScore/:id", userController.UpdateScore)
router.delete("/remove/:id", userController.removeUser);
router.get("/search/:id", userController.getUserById);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/addAdmin', userController.addAdmin);

module.exports = router   