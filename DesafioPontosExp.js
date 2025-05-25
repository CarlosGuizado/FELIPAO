// Lê o nível do monstro
const nivelMonstro = parseInt(gets());

// Lê a dificuldade da batalha
const dificuldade = parseInt(gets());

// Calcula o XP ganho
const xpGanho = nivelMonstro * dificuldade * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");
