const view  = require("../views/matriculas");
const Matricula = require("../models/matriculas");
const jwt = require ("jsonwebtoken");


module.exports.inserirMatricula = function(req,res){
    let matricula = req.body;
    let id_disciplina = req.body.disciplina; //aqui pega o id da disciplina que enviei
    
    let token = req.headers.token; //pra pegar o token
    //tem q pegar o payload dentro do token (aquelas informações q tu botou na função)
    let payload = jwt.decode(token); //aqui pega o id do usuario que tá logado
    let id_aluno_logado = payload.id;
   console.log("criando disciplina");

    promise = Matricula.create({texto:req.body.texto,disciplina:id_disciplina,aluno:id_aluno_logado});
//a função do promisse.then recebe esse aluno que a gente criou
   promise.then(function(matriculacriada){
       res.status(200).json(view.render(matriculacriada));
    }).catch(function(error){
            res.status(400).json({mensagem:"erro"});
     })
   
}

module.exports.listarMatriculas = function(req,res){
    
    let token = req.headers.token; //pra pegar o token
    let payload = jwt.decode(token); 
    let id_aluno_logado = payload.id;

    let promise = Matricula.find({aluno: id_aluno_logado}).populate("aluno").populate("disciplina").exec();
    
    promise.then(function(matriculas){
        res.status(200).json(view.renderMany(matriculas));
    }).catch(function(error){
        res.status(400).json(error);
        console.log(error);
    })

}

module.exports.removerMatricula = function(req,res){
    let id = req.params.id; //pega o id que ta na url
    let promise = Matricula.findByIdAndDelete(id).exec();
    promise.then(function(aluno){
        res.status(200).json({mensagem:"comentario removido"})
    })
}
