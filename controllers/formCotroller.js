const formModel = require("../models/formModel");



exports.addForm = async function (req, res, next) {
    try {
      console.log("data", req.body)
      var content = await formModel.create(req.body)
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


  exports.updateInformationGenerale= async function (req, res, next) {
    console.log('test',req.body)

    try {
      var content =await formModel.update(
        {
          _id : req.params.id
        },
        {
        $set : {
          name: req.body.name,
          prenom: req.body.prenom,
          genre: req.body.genre,
          age: req.body.age,
          nationalite: req.body.nationalite,
          Phone: req.body.Phone,
          email: req.body.email,
          lienfb: req.body.lienfb,
          LienLinkedIn: req.body.LienLinkedIn,
          Situation : req.body.Situation,
          Institution: req.body.Institution,
          Domaine: req.body.Domaine,
          Departement:req.body.Departement,
          Niveau:req.body.Niveau,   
          Annee:req.body.Annee,
          
        
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

  exports.updateForm= async function (req, res, next) {
    console.log('test',req.body)

    try {
      var content =await formModel.update(
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
        RaisonInteret: req.body.RaisonInteret,
        ConcoursEntrepreneuriale:req.body.ConcoursEntrepreneuriale,
        ActiviteEntreprenariale:req.body.ActiviteEntreprenariale,
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
      var forms = await formModel.find();
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
        var content = await formModel.find({"_id": req.params.id});
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
      var content = await formModel.findByIdAndDelete(req.params.id);
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