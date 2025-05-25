/* Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados 
até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e 
aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados 
ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas 
alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */

 class hero {
    constructor(name, age, type) {
        this.nome = name;
        this.idade = age;
        this.tipo = type;
    }

    atacar() {
        const ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        };
        const ataque = ataques[this.tipo.toLowerCase()] || "um ataque desconhecido";
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const hero1 = new hero("Aragorn", 30, "guerreiro");
hero1.atacar();

const hero2 = new hero("Merlin", 60, "mago");
hero2.atacar();
