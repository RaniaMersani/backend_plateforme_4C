const express = require('express');
const router = express.Router()
const formController = require('../controllers/formCotroller')

const {formModel} = require('../models/formModel');

router.post('/add', formController.addForm)
router.get('/', formController.getForms)
router.get("/search/:id", formController.getFormById);
router.post("/updateForm/:id", formController.updateForm);
router.post("/updateInformationGenerale/:id", formController.updateInformationGenerale);

router.delete("/remove/:id", formController.removeForm);


module.exports = router  