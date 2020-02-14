//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // Tira de dentro do objeto o atributo nome e idade, do objeto Pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Atribuindo os atributos às variáveis
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) 

const { conta: {ag, num } } = pessoa
console.log(ag, num)