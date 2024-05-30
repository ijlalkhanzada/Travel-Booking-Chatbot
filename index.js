const dialogflow = require('@google-cloud/dialogflow');
const { WebhookClient, Suggestion } = require('dialogflow-fulfillment');
const express = require("express")
const cors = require("cors");
const path = require('path');
const app = express();
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

})


app.post("/webhook", async (req, res) => {
    var id = (res.req.body.session).substr(43);
    console.log(id)
    const agent = new WebhookClient({ request: req, response: res });

    function bookFlight(agent) {
        const fromCity = agent.parameters['geo-city-from'];
        const toCity = agent.parameters['geo-city-to'];
        const travelDate = agent.parameters['date'];
        agent.add(`Your flight has been booked from ${fromCity} to ${toCity} on ${travelDate}.`);
    }

    function bookHotel(agent) {
        const city = agent.parameters['geo-city'];
        const checkInDate = agent.parameters['date'];
        const stayDuration = agent.parameters['date-period'];
        agent.add(`Your hotel in ${city} has been booked from ${checkInDate} for ${stayDuration}.`);
    }

    function travelInfo(agent) {
        const country = agent.parameters['geo-country'];
        const travelDate = agent.parameters['date'];
        agent.add(`Here is the information about travel to ${country} on ${travelDate}.`);
    }

    function fallback(agent) {
        agent.add("I'm sorry, I didn't understand that. Can you please repeat?");
    }

    // Create an intent map to map intent names to functions
    let intentMap = new Map();
    intentMap.set('BookFlight', bookFlight);
    intentMap.set('BookHotel', bookHotel);
    intentMap.set('TravelInfo', travelInfo);
    intentMap.set('Default Fallback Intent', fallback);

    // Handle the request using the intent map
    agent.handleRequest(intentMap);
});


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
}); 