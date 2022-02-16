const nome = "Cleber Mendes" ;
let nome2 = "" ;
let pessoaDefault = {
    nome: "Cleber Mendes", 
    idade: "41",
    trabalho: "programador"
}

let nomes = ["Cleber Mendes", "Maria Silva", "Lucas Mendes"];

let pessoas = [
    {
        nome: "Cleber Mendes", 
        idade: "41",
        trabalho: "programador"
    },
    {
        nome: "Maria Silva", 
        idade: "61",
        trabalho: "UX/UI Designer"
    }
];

function AlterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteranome(novoNome) {
    nome2 = novoNome;
    console.log("Valor  alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);

console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);

}

function adcionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoa() {
    console.log("-----IMPRIMIR PESSOAS-----")
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);
        
        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);

    })
}

imprimirPessoa();

adcionarPessoa({
    nome: "Lucas Mendes",
    idade: "37",
    trabalho: "promotor"
});

imprimirPessoa();


//imprimirPessoa(pessoaDefault)

// imprimirPessoa({
//     nome: "Maria Silva",
//     idade: "61",
//     trabalho: "UX/UI Designer"
// }); 



//recebeEalteranome("Luiz Mendes");
//recebeEalteranome("Maria Silva")

//AlterarNome();