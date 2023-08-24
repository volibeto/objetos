const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const listaDeAula = [{
    Identificador: 01,
    NomeDaAula: "Introdução a programação"
},
{
    Identificador:02,
    NomeDaAula: "Variáveis"
},
{
    Identificador: 03,
    NomeDaAula: "Condicionais"
},
{
    Identificador: 04,
    NomeDaAula: "Arrays"
}
]

curso.aulas = listaDeAula


console.log(curso)