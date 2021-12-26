const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
// const http = require('http');
// const server = http.createServer(app);
app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 3000;

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });
app.get("/", (req, res) => ews.sendFile(__dirname + "/index.html"));
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const io = require('socket.io')(8000)
const io = require("socket.io")(http);

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    // console.log("New user",name);
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });
  socket.on("send", (message) => {
    socket.broadcast.emit("recieve", {
      message: message,
      name: users[socket.id],
    });
  });
});
