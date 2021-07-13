var mongoose = require ('mongoose');

module.exports = function(){

    var schema = mongoose.Schema({
        texto:{
            type: String,
            required: true,
        },
        aluno:{
            type: mongoose.Schema.ObjectId, //isso permite pegar o id criado pelo mongoose do Aluno
             ref: "Aluno", //aqui diz para qual modelo esse id pertence
        },
        disciplina:{
            type: mongoose.Schema.ObjectId,
            ref: "Disciplina",
        },
       
    });
    return mongoose.model("Matricula",schema); //sempre quando eu falar desse modelo em outro canto, esse vai ser o nome dele: "Aluno"
}();