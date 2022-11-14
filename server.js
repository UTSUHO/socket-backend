import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const path = "/socket/";
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:6000"
  }
});
const port = 3000;
const hostname = "localhost";

io.on("connection", (socket) => {
  // connectHandler(socket);
  console.log(socket.rooms); // Set { <socket.id> }
  socket.join("room1");
  console.log(socket.rooms); // Set { <socket.id>, "room1" }
});

httpServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// function connectHandler(socket) {
//   socket.on("error", errorHandler);
//   socket.on("close", closeHandler);
//   socket.on("message", messageHandler);
// }
// function messageHandler(e) {
//   console.info('接收客户端消息')
//   this.send(e);
// }

// function closeHandler(e) {
//   console.info('客户端已断开')
// }

// function errorHandler(e) {
//   console.info('客户端出错')
// }
// app.get("/", (req, res) => {
//   res.send("Socket IO Test Server");
// });
