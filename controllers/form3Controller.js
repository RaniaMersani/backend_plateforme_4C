const form3Model = require("../models/form3Model");



/// methodepour créer une ligne dans la bd où on précise l'id
exports.addForm = async function (req, res, next) {
    try {
      console.log("data", req.body)
      var content = await form3Model.insertMany({ _id : req.params.id},req.body)
      return res.status(200).json({
        status: 200,
        data: content,
        message: "Form added succesfully",
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message,
      });
    }  
  };


/// modifier les données de la ligne dans la bd dont l'id introduit dans les parametres 
  exports.updateForm = async function (req, res, next) {

    try {
      var content =await form3Model.update(
        {
          _id : req.params.id
        },
        {
        $set : {
          Activites:req.body.Activites,
          Club:req.body.Club,
          Projet:req.body.Projet,
          IdeeDeProjet:req.body.IdeeDeProjet,
          Competences:req.body.Competences,
          CompetencesEquipe:req.body.CompetencesEquipe,
        RaisonInteret: req.body.RaisonInteret,
        ConcoursEntrepreneuriale:req.body.ConcoursEntrepreneuriale,
        ActiviteEntreprenariale:req.body.ActiviteEntreprenariale,
        IdeeDeProjet:req.body.IdeeDeProjet,
        ImportanceCompetencesEquipe :req.body.ImportanceCompetencesEquipe,
        CompetencesManquent:req.body.CompetencesManquent,
        RaisonDePartitipation:req.body.RaisonDePartitipation,
        FaconEntendu:req.body.FaconEntendu,
        Reponse : req.body.Reponse
}
        }
      )
    return res.status(200).json({
      status: 200,
      data: content,
      message: "Succesfully updated",
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
    
  };

  exports.getForms = async function (req, res, next) {

    try {
      var forms = await form3Model.find();
      return res.status(200).json({
        status: 200,
        data: forms,
        message: "Succesfully forms Retrieved",
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message,
      });
    }
  };

  exports.getFormById = async function (req, res, next) {
    try {
        var content = await form3Model.find({"_id": req.params.id});
      return res.status(200).json({
        status: 200,
        data: content,
        message: "Succesfully found",
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message,
      });
    }
  };
  
  exports.removeForm = async function (req, res, next) {
    try {
      var content = await form3Model.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        status: 200,
        data: content,
        message: "Succesfully deleted",
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message,
      });
    }
  };