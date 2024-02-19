//3 Escrevendo as classes de um Jogo
// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar um ataque
    atacar() {
        let ataque;

        // Determinar o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Retornar mensagem de ataque
        return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    }
}

// Criar instâncias de heróis e armazenar mensagens de ataque
const herois = [];
herois.push(new Heroi('Gandalf', 100, 'mago'));
herois.push(new Heroi('Aragorn', 35, 'guerreiro'));
herois.push(new Heroi('Bruce Lee', 40, 'monge'));
herois.push(new Heroi('Hattori Hanzo', 30, 'ninja'));

// Exibir mensagens de ataque
console.log("Ao final deve se exibir uma mensagem:");
herois.forEach(heroi => {
    console.log(heroi.atacar());
});
