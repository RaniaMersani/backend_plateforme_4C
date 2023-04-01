const express = require('express');
const router = express.Router()
const EquipeController = require('../controllers/EquipeController')


router.post('/add', EquipeController.addMembre)
router.get('/', EquipeController.getMembres)
router.get("/search/:id", EquipeController.getMembreById);
router.get("/Find/:id",EquipeController.FindMembre)
router.post("/updateMembre/:id", EquipeController.updateMembre);

router.delete("/remove/:id", EquipeController.removeMembre);


 
module.exports = router  