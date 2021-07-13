const viewAlunos = require("../views/alunos");
const viewDisciplinas = require("../views/disciplinas");

function render(matricula){
    return {
    
        aluno: matricula.aluno,
        disciplina: matricula.disciplina,
        //aluno : viewAlunos.render(matricula.aluno),
        //disciplina : viewDisciplinas.render(matricula.disciplina),
    }
}

module.exports.render = render;

function renderMany(matriculas){
    return matriculas.map(render);
}

module.exports.renderMany = renderMany;