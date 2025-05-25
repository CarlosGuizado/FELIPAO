// Definição da função "combinandoNomesPokemons" que recebe um parâmetro chamado "palavra"
function combinandoNomesPokemons(palavra) {
    // Concatena a palavra recebida com o sufixo "saur" para formar o nome completo do Pokémon
    var palavraPokemon = palavra + "saur";
    
    // Retorna o nome completo do Pokémon
    return palavraPokemon;
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome do Pokémon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);
