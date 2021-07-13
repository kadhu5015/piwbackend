const http = require("http"); //outra biblioteca do node
const app = require("./config/express")(); //importando a função do app aqui, tem o () no final pq o interessante para o funcionamento da aplicação é o retorno e não a função
const db = require("./config/database");

//o http meio que cadastra o servidor
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express Server escutando na porta ' +app.get('port'));

})

db("mongodb://localhost/comtoken");