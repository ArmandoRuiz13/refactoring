const Reader = require("./../../lib/utils/Reader");

describe("Prueba unitaria para Reader", () =>{
    test("Prueba 1 Imprime lista de objetos de los explorers de package.json", () => {
        // Codogigo que vamos a utlizar tal cual
        const explorers = Reader.readJsonFile("explorers.json");
        // Validamos el codigo que esperamos
        expect(explorers).not.toBeUndefined();
    });
});