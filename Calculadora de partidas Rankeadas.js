//Criação da função Placar, com a finalidade calcular a quantidade vitorias, utiilzando o return.
function placar (vitorias, derrotas){
    return vitorias - derrotas;
}

//criação da variável "diferencaPlacar", passando os valores como parâmetros da variável placar
let diferencaPlacar = placar (30, 10);

//Verificação do nível do Ranking
if (diferencaPlacar <= 10){
    nivel = "Ferro";
} else if (diferencaPlacar > 11 && diferencaPlacar <= 20 ){
    nivel = "Bronze";
} else if (diferencaPlacar > 21 && diferencaPlacar <= 50){
    nivel = "Prata";
} else if (diferencaPlacar > 51 && diferencaPlacar <= 80){
    nivel="Ouro";
} else if (diferencaPlacar >81 && diferencaPlacar <= 90){
    nivel="Diamante";
} else if (diferencaPlacar > 91 && diferencaPlacar <= 100){
    nivel="Lendário";
} else if (diferencaPlacar > 100){
    nivel="Imortal";
}

//Impressão da Mensagem com resultado.
console.log(`O Herói tem de saldo de ${diferencaPlacar} vitórias e está no nível de ${nivel}.`);

