const CreateData = x => x.map(item => `${item}: ${Math.floor(Math.random() * 10) + 1}L/km`);
let Carros = CreateData(['Gol','Celta','Uno','chevrolet','Fiesta']);

const ModeloCarro = x => {
    let metros = x.map(y  => Number(y.split(' ')[1].split('L/km')[0])); 
    let Idcarro = metros[0];
    metros.map(x => {
        if(x > Idcarro)   return x
        else    return Idcarro = x;
    });
    return x[metros.indexOf(Idcarro)];
}

const ConsumodeGas = x => x.map(y => {
    let Kilometragem = Number(y.split(' ')[1].split('L/km')[0]);
    return y.split(' ')[0] + " " + y.split(' ')[1].replace(Kilometragem, Kilometragem*1000).replace('/km','');
});

console.log(Carros);
console.log(ModeloCarro(Carros));
console.log(ConsumodeGas(Carros));