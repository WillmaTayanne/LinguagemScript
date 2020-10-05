let escalaCores = [
    {
    cor: 'red',
    rgb: '#FF0000'
    },
    {
    cor: 'green',
    rgb: '#00FF00'
    },
    {
    cor: 'white',
    rgb: '#FFFFFF'
    }
   ];

Seq = s => s.map(item => Object.values(item));

console.log(Seq(escalaCores));