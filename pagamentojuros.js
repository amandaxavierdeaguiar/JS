/* 
Faça um programa que calcule:
1 - A vista no dinheiro - 15% de desconto;
2 - A vista no Cartão - 10% de desconto;
3 - Em 2x - preço da etiqueta;
4 - Acima de 2x - Acresce 10% do valor da etiqueta;
*/

function valorProduto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}

    const valorEtiqueta = 100;
    const formaPagamento = 4;
    const numeroParcelas = 4;

    if (formaPagamento === 1) {
        console.log ('O valor com desconto de 15% é de ' + valorProduto(valorEtiqueta, 15) + ' €');
    } else if (formaPagamento === 2){
        console.log ('O valor com desconto de 10% é de ' + valorProduto(valorEtiqueta, 10) + ' €'); 
    } else if (formaPagamento === 3) {
        console.log ('O valor parcelado é de ' + (valorEtiqueta / 2) + ' €'); 
    } else if (formaPagamento === 4) {
        console.log ('O valor parcelado com 10% de juros é de ' + ((aplicarJuros(valorEtiqueta, 10))/numeroParcelas) + ' €'); 
    } else {
        console.log ('Esta errado, confira as informações');
    }


