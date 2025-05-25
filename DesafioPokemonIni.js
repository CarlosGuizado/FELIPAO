// Lê a escolha do treinador
const escolhaDoTreinador = parseInt(gets());

// Define o Pokémon correspondente à escolha
let pokemonEscolhido;

if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
    pokemonEscolhido = "Pokémon desconhecido";
}

// Imprime a mensagem de boas-vindas
print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
