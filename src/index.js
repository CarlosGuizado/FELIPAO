// 		a. Se XP for menor do que 1.000 = Ferro
//		b. Se XP for entre 1.001 e 2.000 = Bronze
//		c. Se XP for entre 2.001 e 5.000 = Prata
//		d. Se XP for entre 5.001 e 7.000 = Ouro
//		e. Se XP for entre 7.001 e 8.000 = Platina Diamante
//		f. Se XP for entre 8.001 e 9.000 = Ascendente
//		g. Se XP for entre 9.001 e 10.000 = Imortal
//		h. Se XP for maior ou igual a 10.001 = Radiante
// " O Herói de nome **[nome}** está no nível **{nível}**


let nomeHeroi = "Jiraya";
let valorExp = 3500;
let nivelExp = "";

if (valorExp <= 1000) {
    nivelExp = "Ferro"; 
} else if (valorExp <= 2000) {
    nivelExp = "Bronze";
} else if (valorExp <= 5000) {
    nivelExp = "Prata";
} else if (valorExp <= 7000) {
    nivelExp = "Ouro";
} else if (valorExp <= 8000) {
    nivelExp = "Platina Diamente";
} else if (valorExp <= 9000) {
    nivelExp = "Ascendente";
} else if (valorExp <= 10000) {
    nivelExp = "Imortal";
} else {
    nivelExp = "Radiante"; // Última condição pega valores acima de 10000
}

console.log(`O herói de nome ${nomeHeroi} tem EXP = ${valorExp} e está no nível ${nivelExp}`);