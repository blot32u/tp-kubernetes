const express = require('express');
const app = express();

// Configuration
const PORT = process.env.APP_PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hello, world!';

// Middleware pour la route /motd
app.get('/motd', (req, res) => {
  res.json({ message: MESSAGE });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`motd-api listening on port ${PORT}`);
});
