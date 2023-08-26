function escreverNome(nome){
    return 'Meu nome é ' + nome;
}

function maiorIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Amanda') + 'É maior de idade');
} else {
    console.log (escreverNome('Amanda') + 'Menor de idade');
}
}

maiorIdade(31);


