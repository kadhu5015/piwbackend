var mongoose = require ('mongoose');
module.exports = function(){

    var schema = mongoose.Schema({
        nome:{
            type: String,
            required: true
        },
        matricula:{
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
    });

    return mongoose.model("Aluno",schema); //sempre quando eu falar desse modelo em outro canto, esse vai ser o nome dele: "Aluno"
}();