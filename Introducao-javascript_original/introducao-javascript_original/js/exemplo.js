let texto = "A eleição para prefeito de João Pessoa vai ser decidida no segundo turno \
entre os candidatos Cícero Lucena (Progressistas) e Nilvan Ferreira (MDB). A votação \
para Prefeitura de João Pessoa acontece no dia 29 de novembro.\
De acordo com a Justiça Eleitoral, Cícero recebeu 75.610 votos, o que representa 20,72% \
dos votos válidos. Nilvan obteve 60.615 votos, o que representa 16,61% dos votos \
válidos. \
cícero Lucena tem 63 anos e é natural de São José de Piranhas, Sertão do estado. Começou \
a carreira política em 1990, quando foi eleito vice-governador. Já foi governador da \
Paraíba, senador e prefeito de João Pessoa. Cícero liderou as três pesquisas de intenção \
de voto na capital paraibana, saindo de 18% em 5 de outubro para 21% em 22 de outubro e, \
por fim, 22% em 14 de novembro. \
Nilvan Ferreira tem 47 anos e é natural de Cajazeiras, no Sertão da Paraíba. Essa é a \
primeira vez que ele é candidato a um cargo eletivo. nilvan foi o segundo colocado nas \
três primeiras pesquisas de intenção de voto na capital paraibano, registrando os mesmos \
15% em 5 de outubro, 22 de outubro e, por fim, em 14 de novembro.";

const regExp1 = /(Cícero|Nilvan)/gi;
let f = (regExp1.exec(texto));
console.log(f);

//console.log(texto.match(regExp1));
console.log(regExp1.test(texto));
//console.log(texto.replace(regExp1, 'Ruy'));
// console.log(texto.replace(regExp1, '<b>$1</b>'));
//console.log(texto.replace(regExp1, (input)=>{
//    return input.toUpperCase();
//}));


const pattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
console.log(pattern.test('255.255.255.255')); //=> true
console.log(pattern.test('192.168.0.1')); //=> true
console.log(pattern.test('10.0.24.1')); //=> true
console.log(pattern.test('8.8.8.8')); //=> true
console.log(pattern.test('300.8.8.8')); //=> true
