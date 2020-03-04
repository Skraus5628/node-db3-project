const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const welcomeRouter = require('./Welcome/welcomeRouter');

const server = express();

server.use(express.json());
server.use("/", welcomeRouter)
server.use('/api/schemes', SchemeRouter);

module.exports = server;