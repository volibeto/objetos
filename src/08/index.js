const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {
    const { nome, pets } = usuario;
    const quantidaDePets = pets.length;


    if (quantidaDePets === 0) {
        console.log(`Sou ${nome} e não tenho pets.`);
    } else {
        console.log(`Sou ${nome} e tenho ${quantidaDePets} `);
    }
}