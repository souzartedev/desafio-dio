pedido ("Pão na Chapa", 10.00, "Fernando");

function pedido (item, valor, nome = "Cliente"){
    console.log("Solicitado um " + item);
    console.log("Valor do pedido é de R$ " + valor);
    console.log("Esse pedido é de: " + nome)
}

/*
Segunda versão da função
*/

compra ("Hambuguer de frango", 11.00);


function compra(lanche, preco, solicitante = "Consumidor Final"){
    console.log("-----------");
    console.log("Pedido realizado: " + lanche);
    console.log("O custo de R$ " + preco);
    console.log("Quem solicitou foi: " + solicitante);
}