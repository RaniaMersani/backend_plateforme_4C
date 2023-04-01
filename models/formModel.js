
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var formSchema = new Schema(
    {
        name: String,
        prenom: String,
        nationalite: String,
         age : Date,
        genre: String,
        Phone: Number,
        email: String,
        lienfb: String,
        LienLinkedIn: String,
        Situation : String,
        Institution: String,
        Domaine: String,
        Departement:String,
        Niveau:String,   
        Annee:String,
        image:String,
        Activites:String,
        Club:String,
        Projet:String,
        IdeeDeProjet:String,
        Competences:String,
        RaisonInteret:String,
        ConcoursEntrepreneuriale:String,
        ActiviteEntreprenariale:String,
        RaisonDePartitipation:String,
        FaconEntendu:String,
        
        CV : String,
        Video : String,
        BesoinCompetences:String,
        Reponse:{
            type:String,
            enum:['en cours', 'envoye']
      
          },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "user"
        }


        
    
});
module.exports = mongoose.model('Form', formSchema); 
