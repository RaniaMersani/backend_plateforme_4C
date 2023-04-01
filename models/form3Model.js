
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var form3Schema = new Schema(
    {
       
        Activites:String,
        Club:String,
        Projet:String,
        Competences:String,
        CompetencesEquipe:String,
        RaisonInteret:String,
        ConcoursEntrepreneuriale:String,
        ActiviteEntreprenariale:String,
        IdeeDeProjet:String,
        ImportanceCompetencesEquipe :String,
        CompetencesManquent:String,
        RaisonDePartitipation:String,
        FaconEntendu:String,
        Files : [],
        Video:String,
        Reponse:{
            type:String,
            enum:['en cours', 'envoye']
      
          },

        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "user"
        }


        
    
});
module.exports = mongoose.model('Form3', form3Schema); 
