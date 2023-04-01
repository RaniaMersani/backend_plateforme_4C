const EquipeModel = require("../models/EquipeModel");



exports.addMembre = async function (req, res, next) {
    try {
      console.log("data", req.body)
      var content = await EquipeModel.create(req.body)
      return res.status(200).json({
        status: 200,
        data: content,
        message: "Membre added succesfully",
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message,
      });
    } 
  };


  exports.updateMembre= async function (req, res, next) {
    console.log('test',req.body)

    try {
      var content =await EquipeModel.update(
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


  exports.getMembres = async function (req, res, next) {

    try {
      var forms = await EquipeModel.find();
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


/// methode pour trouver les membres associè à l'équipe du chef projet IdChefProjet
  exports.FindMembre = async function (req, res, next) {

    try {
      var forms = await EquipeModel.find({"IdChefProjet": req.params.id});
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


  exports.getMembreById = async function (req, res, next) {
    try {
        var content = await EquipeModel.find({"_id": req.params.id});
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
   
  exports.removeMembre = async function (req, res, next) {
    try {
      var content = await EquipeModel.findByIdAndDelete(req.params.id);
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