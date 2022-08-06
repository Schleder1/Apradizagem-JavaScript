/*var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternario
jogador1 !== -1 && jogador2 !== -1 ? console.log('os jogadores sao validos') : console.log('Jogadores invalidos!');
   
// usando if
    if (jogador1 > 0 && jogador2 == 0){
        console.log('jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    } 
    
// usando else if
    else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
    } 
    
// usando else
    else {
    console.log('ninguem marcou');
    }

    switch(placar){
        case placar = jogador1 > jogador2:
            console.log('jogador 1 ganhou!');
            break;
        case placar = jogador2 > jogador1:
            console.log('jogador 2 ganhou!');
            break;
        default:
            console.log('Ninguem ganhou!');
    } */

    let array = ['v1','v2','v3','v4','v5',];

    let object = { p1: 'v1', p2:'v2', p3: 'v3', p4: 'v4',}

//for executa uma instrucao ate que ela seja falsa
    /* for (let i = 0; i < array.length; i++){
        console.log(i);
    }

//for/in executa repeticao a partir de uma propriedade com array
    for(let i in array) {
        console.log(i);
    }

//com object
    for(i in object){
       console.log(i); 
    }

// for/of executa repeticao apartir do valor
    for (i of array){
        console.log(i);
    } 

// while



while (a < 10) {
    a++;
    console.log(a);
}*/

// do/while
var a = 0;

do {
    a++;
    console.log(a);
} while(a < 10)