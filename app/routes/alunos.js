const controllers = require("../controllers/alunos"); //para pegar todas as funções do controller aluno
const authcontrollers = require("../controllers/auth");
module.exports = function(app){ //não esqueça de chamar essa função no express
   
    app.post("/api/usuarios/signin", authcontrollers.logar);
    app.post("/api/usuarios",controllers.inserirAluno); //no sistema é o cadastro

    app.use("/alunos", authcontrollers.checar);//vai entrar aqui em todas as rotas que começam com "/aluno/s"
    
  
    app.get("/alunos", controllers.listarAlunos); //pegar todos os alunos
    app.get("/alunos/:id", controllers.buscarAlunoPorId );//pegar aluno especifico pelo id 
    app.delete("/api/usuario/:id",controllers.removerAluno);
    app.get("/alunos/:id/disciplinas",controllers.obterDisciplinas);

   
}