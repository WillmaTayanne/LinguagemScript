function media(a, b) {
    
    soma = ((a + b ) / 2);

    if(soma >= 7) {

        return "Aluno aprovado! " + soma;
    }
    else 
        return "Reprovado!";
}

console.log(media(5,6));