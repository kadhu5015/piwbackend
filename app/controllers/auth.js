const Aluno = require("../models/alunos");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function(req, res){

//leia a funcao abaixo como: quero achar o aluno que tem valor igual na chave "matricula" ao q o usuario digitou 
Aluno.findOne({matricula:req.body.matricula})
    .then(function(aluno){ //essa funcao recebe o aluno que foi buscado no findOne
      
        if(bcrypt.compareSync(req.body.senha, aluno.senha)){//primeiro vem o dado e dps o encriptado
           let token = jwt.sign({id: aluno._id}, "senha_secreta"); //aqui vai criar o token e dentro da função é o que a gente dispõe no token
            res.status(200).json({token:token});
        }else{
            console.log("entrou no else");
            res.status(401).send("errou parceira");
        }

    })

}

module.exports.checar = function(req,res, next){ //é o next que passa pra proxima middleware, então não esqueça de botar ele no final
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta",function(err, decoded){
        if (err){
            res.status(401).send("token invalido!");
        }else{
            next();

        }
        
       
    })

}