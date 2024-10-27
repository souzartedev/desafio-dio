let userName = getFirstName("Fernando Anunciação de Souza")

console.log("Seja Bem Vido " + userName)

function getFirstName(name){
    let FirstName = name.split(" ")[0]
    return FirstName
}