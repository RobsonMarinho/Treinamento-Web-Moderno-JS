//par nome/valor
const saudacao = 'Opa'; //contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 33,
    Peso: 90,
    endereeco: {
        logradouro: 'Muito legal',
        numero: 123,
        bairro: 'Afogados'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);