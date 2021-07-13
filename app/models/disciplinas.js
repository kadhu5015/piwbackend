var mongoose = require ('mongoose');
module.exports = function(){

    var schema = mongoose.Schema({
        texto:{
            type: String,
            required: true
        },
        likes:{
            type: String,
            required:true
        },
        
        // nome:{
        //   type: String,
        //     required: true
        // },
        // codigo:{
        //     type: String,
        //     required: true
        // },
        // carga:{
        //     type: String,
        //     required: true
        // },
    });

    return mongoose.model("Disciplina",schema); //sempre quando eu falar desse modelo em outro canto, esse vai ser o nome dele: "Aluno"
}();