calculadoraDeIMC = () => {
    let weight = document.getElementById('altura').value;
    let height = document.getElementById('peso').value;
    let imc = ((height * height) / weight);
    const sexoElemento = document.querySelector('input:checked').value;
    const imcElemento = document.querySelector('#imc');
    switch (sexoElemento) {
        case 'feminino':
            if (imc < 19.1) {
                return imcElemento.value = 'Abaixo do Peso';
            }
            else if (imc > 19.1 && imc < 25.8) {
                return imcElemento.value = 'Peso Normal';
            }
            else if (imc > 25.8 && imc < 27.3) {
                return imcElemento.value = 'Marginalmente Acima do Peso';
            }
            else if (imc > 27.3 && imc < 32.3) {  
                return imcElemento.value = 'Acima do peso ideal';
            }
            else
                return imcElemento.value = 'Obeso';
        case 'masculino': 
            if (imc < 20.7) {
                return imcElemento.value = 'Abaixo do Peso';
            }
            else if (imc > 20.7 && imc < 26.4) {
                return imcElemento.value = 'Peso Normal';
            }
            else if (imc > 26.4 && imc < 27.8) {
                return imcElemento.value = 'Marginalmente Acima do Peso';
            }
            else if (imc > 27.8 && imc < 31.1) {  
                return imcElemento.value = 'Acima do peso ideal';
            }
            else         
                return imcElemento.value = 'Obeso';
    }
}