function media(array) {

    return array.filter(function(x){
        return x >= 7;
    });


}

console.log(media([3,8,9,7,5,6,10,1,7,8,9]));

