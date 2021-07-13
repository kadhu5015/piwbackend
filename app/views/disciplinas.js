function render(disciplina){
    return {
       
        texto: disciplina.texto,
        likes: disciplina.likes,
    }
}

module.exports.render = render;

function renderMany(disciplinas){
    return disciplinas.map(render);
}

module.exports.renderMany = renderMany;