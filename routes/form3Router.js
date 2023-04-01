const express = require('express');
const router = express.Router()
const form3Controller = require('../controllers/form3Controller')

const {formModel} = require('../models/form3Model');

router.post('/add/:id', form3Controller.addForm)
router.get('/', form3Controller.getForms)
router.get("/search/:id", form3Controller.getFormById);
router.post("/updateForm/:id", form3Controller.updateForm);

router.delete("/remove/:id", form3Controller.removeForm);



module.exports = router 