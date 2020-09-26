const namesByComics = (personagem, quadrinho) => { 
    let ComicsType = [];
    personagem.map(item => item.comics === quadrinho ? ComicsType.push(item.name) : false);
    return ComicsType.sort((a, b) => a.localeCompare(b));
}
  
const topWeightNames = (personagem, quadrinho = null) => {
    personagem = personagem.filter(item => {
        if(quadrinho !== null){
            if(item.quadrinho === quadrinho) return item;
        }
        else return item;
    });
    return personagem.sort((a,b) => b.weight - a.weight).map(item => item.name);
};
  
const weight = (personagem, quadrinho) => {
    let weight = 0;
    personagem = personagem.filter(item => item.quadrinho === quadrinho ? weight += item.weight : false);
    return weight/personagem.length;
}
