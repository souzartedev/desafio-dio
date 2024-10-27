pedido ("Pão na Chapa", 10.00, "Fernando");

function pedido (item, valor, nome = "Cliente"){
    console.log("Solicitado um " + item);
    console.log("Valor do pedido é de R$ " + valor);
    console.log("Esse pedido é de: " + nome)
}