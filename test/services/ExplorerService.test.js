const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Prueba unitaria para ExplorerService", () =>{
    test("Prueba 1 Imprime la cantidad de explorers que su mission es node", () => {
        // Codogigo que vamos a utlizar tal cual
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        // Validamos el codigo que esperamos
        expect(explorersInNode).not.toBeUndefined();
    });
    test("Prueba 2 cantidad de explorers por mision", () => {
        const explorersAmmoutInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersAmmoutInNode).toBe(10);
    });
    test("Prueba 3 usuarios que su mision es node ", () => {
        const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toContain("ajolonauta1");
        expect(usernamesInNode).toContain("ajolonauta2");
        expect(usernamesInNode).toContain("ajolonauta3");
        expect(usernamesInNode).toContain("ajolonauta4");
        expect(usernamesInNode).toContain("ajolonauta5");
        expect(usernamesInNode).toContain("ajolonauta11");
        expect(usernamesInNode).toContain("ajolonauta12");
        expect(usernamesInNode).toContain("ajolonauta13");
        expect(usernamesInNode).toContain("ajolonauta14");
        expect(usernamesInNode).toContain("ajolonauta15");
    });
});