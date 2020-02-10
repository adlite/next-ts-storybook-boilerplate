// Vendor
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
// Internals
const {port, dev} = require('./config');
const {corsMiddleware} = require('./middlewares');
const {logger} = require('./utils/logger');

async function main() {
  const app = next({dev});

  await app.prepare();
  const server = express();

  // Middlewares
  server.use(bodyParser.json()); // Parse JSON body
  server.use(corsMiddleware); // Add CORS headers

  // Handle all requests by NextJS
  server.get('*', app.getRequestHandler());

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
}

main().catch(err => logger.error('APP CRASHED: ', err));
