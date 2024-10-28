class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Definindo o tipo de ataque com base no tipo do herói
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "fez um ataque indefinido"; // caso o tipo não seja um dos especificados
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando uma instância da classe Heroi
const heroi = new Heroi("Arthur", 30, "ninja");

// Chamando o método atacar para exibir a mensagem
heroi.atacar();
