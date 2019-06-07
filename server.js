require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const actionsRouter = require('./data/actions/actionsRouter');
const projectsRouter = require('./data/projects/projectsRouter');

const server = express();

// Middleware
server.use(express.json());
server.use(morgan("dev"));

//Routes
server.use('api/actions', actionsRouter);
server.use('api/projects', projectsRouter);



server.get("/", (req, res) => {
  res.send(`<h1>This is the sprint challenge</h1>`);
});

module.exports = server;