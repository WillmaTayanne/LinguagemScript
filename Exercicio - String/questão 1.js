let calcLetras = palavra => { 

    var totalVogal = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var i;

    let resultado = palavra.split("").map(item =>{ 
        if(vogais.indexOf(item) !== -1) {
            totalVogal++;
            return "#";
        }      
        else return });

        return "A palavra tem: " +totalVogal+ " Vogais, Trocando as vogais por # fica " + resultado.join("")


}
console.log(calcLetras("amor"));


