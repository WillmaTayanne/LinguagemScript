let produtoSequencial = x => {

    let Produto = Number(x[0]) * Number(x[1]) * Number(x[2]);
    let Sequencial = [];
    for (let i = 0; i < x.length - 2; i++) {
        let Seq = Number(x[i]) * Number(x[i+1]) * Number(x[i+2]);
        if(Seq > Produto) {
            Produto = Seq;
            Sequencial = [Number(x[i]), Number(x[i+1]), Number(x[i+2])];

            return "A sequencia é: " + Sequencial + " O produto é: " + Produto ;
        }

    }
  
}

console.log(produtoSequencial("28488"));
