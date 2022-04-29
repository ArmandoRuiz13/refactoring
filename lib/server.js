const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission",(request,response) =>{
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission); 
    response.json(explorerInMission);
});
app.get("/v1/explorers/amount/:mission",(request,response) =>{
    const mission = request.params.mission;
    const explorersAmmoutInNode = ExplorerController.getExplorersAmonutByMission(mission);
    response.json("{Mission: "+ mission +" ,quality: "+explorersAmmoutInNode +"}");
});
app.get("/v1/explorers/usernames/:mission",(request,response) =>{
    const mission = request.params.mission;
    const usernamesInNode = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json("{Mission: " + mission +", Explorers : " + usernamesInNode +"}");
});
app.get("/v1/fizzbuzz/:number",(request,response) =>{
    const number = request.params.number;
    const trick = ExplorerController.getNumberValidation(number);
    response.json("{score: " + number +", trick : " + trick +"}");
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});