const carros = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    cor: "vermelho",
    quantidade_portas: 4,
    automatico: false
};

let ehautomatico = "";

if (carros.automatico === true) {
    ehautomatico = "Automatico";
} else {
    ehautomatico = "Manual";
}

carros.automatico = ehautomatico;

console.log(carros);