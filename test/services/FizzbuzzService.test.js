const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json")

describe('Prueba unitaria para ExplorerService', () =>{
    test('Prueba 1 Imprime la cantidad de explorers que su mission es node', () => {
        const explorer1 = {name: "Explorer1", score: 1}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer.trick).toBe(1)
    })
    test('Prueba 1 Imprime la cantidad de explorers que su mission es node', () => {
        const explorer3 = {name: "Explorer3", score: 3}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer.trick).toBe('FIZZ')
    })
    test('Prueba 1 Imprime la cantidad de explorers que su mission es node', () => {
        const explorer5 = {name: "Explorer5", score: 5}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer.trick).toBe('BUZZ')
    })
    test('Prueba 1 Imprime la cantidad de explorers que su mission es node', () => {
        const explorer15 = {name: "Explorer15", score: 15}
        explorer = FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer.trick).toBe('FIZZBUZZ')
    })
})