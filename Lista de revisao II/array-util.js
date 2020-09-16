function min(array) {
    let minResultado = array[0];

    for(let i = 1; i < array.length; i++ ) {
        if(minResultado > array[i]) minResultado = array[i];
    }
    return minResultado;
}

function max(array) {
    let maxResultado = array[0];

    for(let value of array) {
        if(maxResultado < value) maxResultado = value;
    }
    return maxResultado;
  }

function range(length, last, step) {
    
    let begin = last ? length : 0;
    let end = last || length;
    let result = [];

    for (let number = begin; number < end; number += step) {
        result.push(number);
    }

    return result;

  }
  
  function zip(...arrays) {
    let result = [];
    for(let index = 0; index < arrays.length; index++ ) {
        let values = [];
        for (let array = 0; array < arrays.length; array++) values.push(arrays[array][index]);
        result.push(values);
    }

    return result;

  }

function uniq(array) {
    
    let result = [];
    for (let value of array) {
        if(!result.includes(value)) result.push(value);
    }

    return result;

  }
  
  function sortNum(array) {
    
    return array.sort((a,b) => a - b);

  }

export { min, max, range, zip, uniq, sortNum };
