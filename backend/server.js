const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// create port number: assign a special ID to differentiate the other servers running on the same machine
// ip address is a building, prot number is the rooms
// app.listen(3000, () => console.log('Server running on port 3000'));


// middle ware between the client and server check encoding of body and decode for us
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());  have to use either of the 2 to decode the file so operating system can understand

// app.post('/getCityWeather', async (req, res) => {
//     resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)
//     jsonResp = await resp.json()
//     res.send(jsonResp);


app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=58e07651f9ea9b5f857b81af3b96062c&units=metric`)
    jsonResp = await resp.json()
    res.send(jsonResp);
});
