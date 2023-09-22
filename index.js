const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(req.socket.remoteAddress);
});

app.listen(port, () => {
    console.log("Listening on port: " + port);
})