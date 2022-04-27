const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");


const explorers = Reader.readJsonFile("explorers.json")
console.log("Explorers clase .json \n",explorers)
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
console.log("Explorer con mission node", explorersInNode)
const explorersAmmoutInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log("cantidad Explorer con mission node", explorersAmmoutInNode)
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
console.log("Explorer usuario con mission node", usernamesInNode)
explorer = FizzbuzzService.applyValidationInExplorer(explorers) 
console.log("Explorer validacion fizz  buzz y fizzbuzz", explorer.trick)
