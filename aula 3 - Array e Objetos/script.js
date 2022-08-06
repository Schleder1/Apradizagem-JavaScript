// o que sao vetores ou arrays

// como declarar um array
   /* let array = ['string', 1, true];
    console.log(array); */

// pode guardar varias informacoes

    let array = ['string', 1, true, ['array 1'], ['array 2'], ['array 3'], ['array 4']];
    /*console.log(array);

     forEach
    array.forEach(function(item, index){console.log(item, index)}); 

    array.push('anything');
    console.log(array);

    array.pop();
    console.log(array);

    array.shift();
    console.log(array);

    array.unshift('something new');
    console.log(array);

    console.log(array.indexOf(true));
    
    array.splice(0 , 3);
    console.log(array);

    let novoArray = array.slice(0, 3);
    console.log(novoArray);*/

    let object = { string: 'string', number: 1, boolean: true, array: ['array1'], objectInterno: {objetcInterno: 'objetcInterno'}};
    
   /* console.log(object);

    var string = object.string;
    console.log(string);

    var verArray = object.array;
    console.log(verArray);*/

    var { string, boolean, objectInterno} = object;
    console.log( string, boolean, objectInterno);