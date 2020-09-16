function newValues {
    let number = [0];
    
    number.map(item => {
            number.length === 1 ? number.push(item) : number.push(item + number[number.length - 1]);
    });

    return number;
}