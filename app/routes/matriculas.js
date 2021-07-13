const controllers = require("../controllers/matriculas");
const authcontrollers = require("../controllers/auth");
module.exports = function(app){ //não esqueça de chamar essa função no express  
    app.use("/api/comentarios",authcontrollers.checar);
    app.get("/api/", controllers.listarMatriculas);
    app.post("/api/comentarios",controllers.inserirMatricula);
    app.delete("/api/comentarios/:id", controllers.removerMatricula);
    
}