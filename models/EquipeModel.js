
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipeSchema = new Schema(
    {
        IdChefProjet:String,
        name: String,
        prenom: String,
        genre: String,
        age: Date,
    	nationalite: String,
        Phone: Number,
        email: String,
        lienfb: String,
        LienLinkedIn: String,
        Situation : String,
        Institution: String,
        Domaine: String,
        Departement:String,
        Niveau:String,    
        image:String, 
        Annee:String,
       
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "user"
        }


        
    
});
module.exports = mongoose.model('EquipeSchema', EquipeSchema); 
