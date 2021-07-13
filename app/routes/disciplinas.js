const controllers = require("../controllers/disciplinas"); //para pegar todas as funções do controller aluno
const authcontrollers = require ("../controllers/auth");
module.exports = function(app){ //não esqueça de chamar essa função no express
    
    app.use("/api/posts", authcontrollers.checar);
    app.post("/api/posts",controllers.inserirDisciplina);
    app.delete("/api/posts/:id",controllers.removerDisciplina);
    app.get("/api/post", controllers.listarDisciplina);
   
}