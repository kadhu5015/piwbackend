//teste
//funcionou krl
const view  = require("../views/alunos");
const Aluno = require("../models/alunos");
const Matricula = require("../models/matriculas");
const viewMatricula = require("../views/matriculas");
const viewDisciplinas = require("../views/disciplinas");
const bcrypt = require("bcrypt");

module.exports.listarAlunos = function(req,res){
    let promise = Aluno.find().exec();

    //a variavel da funcao abaixo "alunos" pegam todos os alunos
    promise.then(function(alunos){
        res.status(200).json(view.renderMany(alunos));
    }).catch(function(error){
        res.json({mensagem:"vala besha não deu certo"});
    });
}

module.exports.buscarAlunoPorId = function(req, res){
    let id = req.params.id; //pega o id que ta na url
    console.log(id);
    let promise = Aluno.findById(id).exec();
    promise.then(function(aluno){
        res.status(200).json(view.render(aluno))
    }).catch(function(error){
        res.status(400).json({mensagem:"usuario nao encontrado"});
    })
}

module.exports.inserirAluno = function(req,res){
   let aluno = {

        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha,10),

   }
   promise = Aluno.create(aluno);
//a função do promisse.then recebe esse aluno que a gente criou
   promise.then(function(aluno){
        res.status(201).json(view.render(aluno));
        console.log("senha do aluno");
        console.log(aluno.senha);
       //res.status(201).json(view.render(aluno));
   }).catch(function(error){
       res.status(400).json({mensagem:"erro"});
   })
   
}

module.exports.removerAluno = function(req,res){
    let id = req.params.id; //pega o id que ta na url
    let promise = Aluno.findByIdAndDelete(id);
    promise.then(function(aluno){
        res.status(200).json({mensagem:"usuario removido"})
    })
}

module.exports.obterMatriculas = function(req,res){
   
    let id = req.params.id; //pegando o id do aluno que tá na suposta "url"
    //para verificar quais matriculas pertencem aos alunos, é necessário importar os modelos de matricula
    let promise = Matricula.find({aluno:id}).populate("aluno").populate("disciplina").exec(); //vai procurar nas chaves "aluno" qual tem o id q a gente pegou
    promise.then(function(matriculas){
        res.status(202).json(viewMatricula.renderMany(matriculas));
    }).catch(function(error){
        res.status(400).json(error);
    })
}

module.exports.obterDisciplinas = function(req,res){

    let id = req.params.id;
    let promise = Matricula.find({aluno:id}).populate("disciplina").exec();
    promise.then(function(matriculas){
        let disciplinas = matriculas.map(function(matricula){return matricula.disciplina}); //pega somente as disciplinas
        res.status(200).json(viewDisciplinas.renderMany(disciplinas));
      
    }).catch(function(error){
        res.status(400).json(error);
    })


}
