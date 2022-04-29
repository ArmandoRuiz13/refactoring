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
        const num1 = 1; 
        const num2 = 3;
        const num3 = 5;
        const num4 = 15;
        num01 = FizzbuzzService.applyValidationInNumber(num1);
        num02 = FizzbuzzService.applyValidationInNumber(num2);
        num03 = FizzbuzzService.applyValidationInNumber(num3);
        num04 = FizzbuzzService.applyValidationInNumber(num4);
        expect(num01).toBe(1);
        expect(num02).toBe("FIZZ");
        expect(num03).toBe("BUZZ");
        expect(num04).toBe("FIZZBUZZ");
    });

});