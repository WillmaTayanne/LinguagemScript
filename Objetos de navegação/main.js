temperaturaFahrenheit = (temp) => {

    temp = parseFloat(temp);
    document.getElementById("outnputfahrenheit").innerHTML=(temp * 1.8) + 32;
 
}

temperaturaKelvin = (temp) => {

    temp = parseFloat(temp);
    document.getElementById("outnputkelvin").innerHTML=temp+273.15;
 
    

}

mudaBackground = (caracter) => {

    var muda = document.getElementById("body");

    if (caracter.length > 8) {
        muda.style.backgroundColor = "ffff00";
    
    }
    else {
        muda.style.backgroundColor = "fdfcff";
    }
}

redimensionarJanela = () => {
    let width = window.prompt('Digite a Nova Largura: ');
    let height = window.prompt('Digite a Nova Altura: ');
    window.open(window.location.href, "", `width=${width}, height=${height}`); window.close();
}
