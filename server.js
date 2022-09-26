const express = require("express"); // express for routing
const server = express(); // express server
const mongoose = require("mongoose");
require("dotenv").config();

server.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

server.use(express.json()); /// for getting data from req.body

const router = require("./routes/main");
server.use("/", router);

const http = require("http").createServer(server);

http.listen(5000, () => {
  console.log("Web app server listenning to port 5000...");
});
