const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Prueba unitaria para ExplorerService", () =>{
    test("Prueba 1 Imprime un explorer validando la propiedad strick que pertenece a cada explorer", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer.trick).toBe(1);
    });
    test("Prueba 2 Imprime un explorer validando la propiedad strick que pertenece a cada explorer", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer.trick).toBe("FIZZ");
    });
    test("Prueba 3 Imprime un explorer validando la propiedad strick que pertenece a cada explorer", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer.trick).toBe("BUZZ");
    });
    test("Prueba 4 Imprime un explorer validando la propiedad strick que pertenece a cada explorer", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        explorer = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer.trick).toBe("FIZZBUZZ");
    });
    test("Prueba 5 Imprime un valor numerico dependiendo si es divisible se le aplica una propiedad nueva", () => {
        const number1 = 1; 
        const number2 = 3;
        const number3 = 5;
        const number4 = 15;
        number01 = FizzbuzzService.applyValidationInNumber(number1);
        number02 = FizzbuzzService.applyValidationInNumber(number2);
        number03 = FizzbuzzService.applyValidationInNumber(number3);
        number04 = FizzbuzzService.applyValidationInNumber(number4);
        expect(number01).toBe(1);
        expect(number02).toBe("FIZZ");
        expect(number03).toBe("BUZZ");
        expect(number04).toBe("FIZZBUZZ");
    });

});