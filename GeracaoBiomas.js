// Lê a quantidade de golpes informada pelo usuário
const quantidadeGolpes = parseInt(gets());

// Define os tipos de minerais
const minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
    // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
    let minaIndex = (i - 1) % minerais.length;

    // Exibe o número do golpe e o minério obtido
    print(i + ": " + minerais[minaIndex]);
}
