const express = require('express'); //importando o express, quando é uma biblioteca do npm, basta eu botar o nome sem precisar especificar o caminho
const routerAlunos = require("../app/routes/alunos"); //pega a função das rotas
const routerDisciplinas = require("../app/routes/disciplinas");
const routerMatriculas = require("../app/routes/matriculas");

const bodyParser = require("body-parser");
module.exports = function(){ //exportando a função que configura o express
    let app = express(); //inicializa a aplicação express

    //definindo qual a porta padrao:
    app.set("port", 8393);
    app.use(bodyParser.json()); //apenas aceite que tem que colocar isso por causa do Body parser
    app.use(bodyParser.urlencoded({ extended: false})); //apenas aceite que tem que colocar isso
    
    app.use(express.static("./public")); //esse use vai servir tudo o que tiver em public
    
   
    routerAlunos(app); //passa o app para a função na route
    routerDisciplinas(app);
    routerMatriculas(app);

    return app;
}