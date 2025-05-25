//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    // Cria o construtor para receber os atributos do item mágico
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }

    // Método que calcula o dano causado em combate
    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano e a resistência
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

// Criação do objeto ItemMagico personalizado
const item = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Impressão dos atributos do item e do dano em combate
print("Tipo: " + item.tipo);
print("Dano: " + item.dano);
print("Resistencia: " + item.resistencia);
print("Dano em combate: " + item.calcularDano());

