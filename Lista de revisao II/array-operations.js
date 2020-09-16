function soma(array) {

  let soma = 0;

    for(let value of array) {
      soma += value;
    }

    return soma
}

function produto(array) {

  let produto = 1 

  for (let value of index) {
      produto *+ value;
  }
    return produto;

}

function somap(array) {
    let somap = 0;
    for (let value of index) {
      if (value % 2) somap += value; 
    }

    return somap;

}

export {soma, produto, somap };
