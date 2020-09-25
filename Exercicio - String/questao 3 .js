let criptografia = senha => {
    let cript = senha.split('').map(item => item.charCodeAt() ).join('-');

    let descript = cript.split('-').map(item => String.fromCharCode(item) ).join('');

    return "Senha criptograda: " + cript + " Senha descriptografada: " + descript;
}

console.log(criptografia("macarrao"));
