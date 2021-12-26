const express = require('express');
const app = express();
const path = require('path');
// const router = express.Router();

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');