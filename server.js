require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const server = express();

// Middleware
server.use(express.json());
server.use(morgan("dev"));



server.get("/", (req, res) => {
  res.send(`<h1>This is the sprint challenge</h1>`);
});

module.exports = server;