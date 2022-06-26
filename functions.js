function pessoa(id, nome, primeiro_sobrenome, segundo_sobreno, email, idade) {
    this.id = id;
    this.nome = nome;
    this.primeiro_sobrenome = primeiro_sobrenome;
    this.segundo_sobreno = segundo_sobreno;
    this.email = email;
    this.idade = idade;
}

const pessoas = new Array();
const pessoa1 = new pessoa(1, "Lucas", "Gomes", "Loureço", "lucas.lourenco@gmail.com", 21);
const pessoa2 = new pessoa(2, "Júlia", "Schneider", "Cecyn", "julia.cecyn@gmail.com", 19);
const pessoa3 = new pessoa(3, "Elisa Carla", "Gomes", "Rosa", "elisa.rosa@gmail.com", 41);
const pessoa4 = new pessoa(4, "Marcelo", "Loureço", null, "marcelo.lourenco@gmail.com", 46);
const pessoa5 = new pessoa(5, "Gabriel", "Gomes", "Loureço", "gabriel.lourenco@gmail.com", 17);
const pessoa6 = new pessoa(6, "Manuela", "Gomes", "Loureço", "manu.lourenco@gmail.com", 1);
const pessoa7 = new pessoa(7, "Lourdes", "Gomes", "Rosa", "lourdes.rosa@gmail.com", 66);
const pessoa8 = new pessoa(8, "Nelson", "Rosa", null, "nelson.rosa@gmail.com", 68);
const pessoa9 = new pessoa(9, "Mario", "Gomes", null, "mario.gomes@gmail.com", 90);
const pessoa10 = new pessoa(10, "Mario", "Rosa", "Gomes", "mario.gomes@gmail.com", 90);

pessoas.push(pessoa1);
pessoas.push(pessoa2);
pessoas.push(pessoa3);
pessoas.push(pessoa4);
pessoas.push(pessoa5);
pessoas.push(pessoa6);
pessoas.push(pessoa7);
pessoas.push(pessoa8);
pessoas.push(pessoa9);
pessoas.push(pessoa10);

// FILTRANDO POR FAMÍLIA
const familia_gomes = pessoas.filter((dado) => dado.primeiro_sobrenome == "Gomes" || dado.segundo_sobreno == "Gomes");
// console.log(familia_gomes);

// SOBRENOMES 
const sobrenomes = pessoas.map((dados) => dados.primeiro_sobrenome + " " + dados.segundo_sobreno);
// console.log(sobrenomes);

// SOMA TODAS AS IDADES 
const soma_idades = pessoas.reduce((aux, dados) => (aux = aux + dados.idade), 0);
// console.log(soma_idades);