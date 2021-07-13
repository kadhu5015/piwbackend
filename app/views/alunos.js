function render(aluno){
    return {
        
        nome:aluno.nome,
        matricula: aluno.matricula,

    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render);

}

module.exports.renderMany = renderMany;