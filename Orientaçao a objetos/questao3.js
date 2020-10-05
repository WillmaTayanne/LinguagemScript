class Receita{
    constructor(titulo, porcoes,ingredientes){
        this.titulo = titulo;
        this.porcoes = porcoes;
        this.ingredientes = ingredientes;
    }
}

CreateObject = (t,p,i) => typeof(t) === 'string' && typeof(p) === 'number' &&
    typeof(i) === 'object' ? new Receita(t,p,i) : console.log('Receita errada, faça novamente');

FormatObject = obj => {
    x = `${obj.titulo}
Porções: ${obj.porcoes}
Ingredientes:\n  `
    obj.ingredientes.map(item => {
        x += `${item}\n  `
    })
    return x
}

rec = CreateObject('Carne Apimentada',2,['carne','canela','cominho','cacau','pimenta']);
receitaExibir = FormatObject(rec);

console.log(receitaExibir)