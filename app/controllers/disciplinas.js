const view  = require("../views/disciplinas");
const Disciplina = require("../models/disciplinas");

module.exports.inserirDisciplina = function(req,res){
   let disciplina = req.body;
   promise = Disciplina.create(disciplina);
//a função do promisse.then recebe esse aluno que a gente criou
   promise.then(function(disciplina){
    
       res.status(201).json(view.render(disciplina));
   }).catch(function(error){
       res.status(400).json({mensagem:"erro"});
   })
   
}

module.exports.removerDisciplina = function(req,res){
    let id = req.params.id; //pega o id que ta na url
    let promise = Disciplina.findByIdAndDelete(id).exec();
    promise.then(function(aluno){
        res.status(200).json({mensagem:"post removido"})
    })
}

module.exports.listarDisciplina = function(req, res){

    let promise = Disciplina.find().exec();
    promise.then(function(discipĺinas){
        res.status(200).json(view.renderMany(discipĺinas));
    }).catch(function(error){
        res.status(400).json(error);
        console.log(error);
    })


}