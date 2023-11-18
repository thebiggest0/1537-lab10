const express = require('express');
const app = express();

const cors = require('cors');
// cors stands for course, origin, resourse, shareing
// it is disabled by default, if hosting website online, not allowing any ajax request other than mine, if enabled then it will allow any ajax request to trigger routes on my server.js
// it is important here because front end is stand alone code hosted in another domain, 
app.use(cors());

// create port number: assign a special ID to differentiate the other servers running on the same machine
// ip address is a building, prot number is the rooms
app.listen(3000, () => console.log('Server running on port 3000'));

// have to comment out this because using cors 
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// middle ware between the client and server check encoding of body and decode for us
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());  have to use either of the 2 to decode the file so operating system can understand

// app.post('/getCityWeather', async (req, res) => {
//     resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)
//     jsonResp = await resp.json()
//     res.send(jsonResp);


app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)
    jsonResp = await resp.json()
    res.send(jsonResp);
});