const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Prueba unitaria de ExplorerController", () =>{
    test("Este prueba regresa los explorer de una mission", () => {
        // Codogigo que vamos a utlizar tal cual
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        // Validamos el codigo que esperamos
        expect(explorersInNode).not.toBeUndefined();
    });
});