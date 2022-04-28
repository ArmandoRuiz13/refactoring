const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Prueba unitaria de ExplorerController", () =>{
    test("Este prueba regresa los explorer de una mission", () => {
        // Codogigo que vamos a utlizar tal cual
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        // Validamos el codigo que esperamos
        expect(explorersInNode).not.toBeUndefined();
    });
    test("Prueba 2 usuarios que su mision es node ", () => {
        const usernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
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
    test("Prueba 3 cantidad de explorers por mision elegida", () => {
        const explorersAmmoutInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersAmmoutInNode).toBe(10);
    });
});