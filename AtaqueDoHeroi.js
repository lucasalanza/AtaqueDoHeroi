class Heroi {
  // Construtor que recebe os atributos do herói
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.vida = Math.floor(Math.random() * 50) + 1; // Vida entre 1 e 50
    this.danomaximoAtaque = Math.floor(Math.random() * 11) + 10; // Dano máximo entre 10 e 20
  }

  // Método para realizar o ataque com base no tipo do herói
  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "realizou um ataque";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }

  // Método para calcular o dano
  calcularDano() {
    return Math.floor(Math.random() * this.danomaximoAtaque) + 1; // Dano entre 1 e danomaximoAtaque
  }

  // Método para sofrer dano
  sofrerDano(dano) {
    this.vida -= dano;
    if (this.vida < 0) this.vida = 0; // Evitar vida negativa
  }
}
function rodadaAtaque() {
  // Criação de heróis com diferentes tipos e execução do método atacar
  const heroi1 = new Heroi("Arthur", 30, "guerreiro");
  heroi1.atacar();

  const heroi2 = new Heroi("Merlin", 150, "mago");
  heroi2.atacar();

  const heroi3 = new Heroi("Liu Kang", 35, "monge");
  heroi3.atacar();

  const heroi4 = new Heroi("Naruto", 17, "ninja");
  heroi4.atacar();
}

// Novo método para realizar a batalha entre dois heróis
function batalha(numeroDeRodadas) {
  const heroi1 = new Heroi("Arthur", 30, "guerreiro");
  const heroi2 = new Heroi("Merlin", 150, "mago");

  console.log(`Iniciando batalha entre ${heroi1.nome} e ${heroi2.nome}`);
  console.log(
    `${heroi1.nome} - Vida: ${heroi1.vida}, Dano Máximo: ${heroi1.danomaximoAtaque}`
  );
  console.log(
    `${heroi2.nome} - Vida: ${heroi2.vida}, Dano Máximo: ${heroi2.danomaximoAtaque}`
  );

  for (let rodada = 1; rodada <= numeroDeRodadas; rodada++) {
    if (heroi1.vida <= 0 || heroi2.vida <= 0) break;

    console.log(`\nRodada ${rodada}:`);

    // Herói 1 ataca Herói 2
    let danoHeroi1 = heroi1.calcularDano();
    heroi2.sofrerDano(danoHeroi1);
    console.log(
      `${heroi1.nome} atacou ${heroi2.nome} causando ${danoHeroi1} de dano.`
    );

    // Herói 2 ataca Herói 1
    let danoHeroi2 = heroi2.calcularDano();
    heroi1.sofrerDano(danoHeroi2);
    console.log(
      `${heroi2.nome} atacou ${heroi1.nome} causando ${danoHeroi2} de dano.`
    );

    // Exibir vida restante
    console.log(`${heroi1.nome} - Vida restante: ${heroi1.vida}`);
    console.log(`${heroi2.nome} - Vida restante: ${heroi2.vida}`);

    // Verificar se algum herói ficou sem vida
    if (heroi1.vida <= 0 || heroi2.vida <= 0) {
      break;
    }
  }

  // Determinar o vencedor
  let vencedor;
  if (heroi1.vida > heroi2.vida) {
    vencedor = heroi1.nome;
  } else if (heroi2.vida > heroi1.vida) {
    vencedor = heroi2.nome;
  } else {
    vencedor = "Nenhum, foi um empate!";
  }

  console.log(`\nVencedor: ${vencedor}`);
}

module.exports = {
  rodadaAtaque,
  batalha,
};

if (require.main === module) {
  rodadaAtaque();
  batalha(5); // Exemplo de batalha com 5 rodadas
}
