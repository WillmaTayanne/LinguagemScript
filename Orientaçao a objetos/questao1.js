let biblioteca = [
    {
    titulo: 'Morte no Nilo',
    autor: 'Agatha Christie',
    bibliotecaID: 1254
    },
    {
    titulo: 'Os miseráveis ',
    autor: 'Victor Hugo',
    bibliotecaID: 4264
    },
    {
    titulo: 'O Senhor dos Anéis',
    autor: 'JRR Tolkien',
    bibliotecaID: 3245
    }
    ];
    
    ordemAlfabetica = o => o.sort((x,y) => {
      if(x.autor > y.autor) {
        return 1;
      }
      if (x.autor < y.autor) {
        return -1;
      }
      return 0;
    });
    
    console.log(ordemAlfabetica(biblioteca));
    
    