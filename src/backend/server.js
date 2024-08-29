// src/backend/server.js

const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
const api = require('./api');

const app = express();
const port = 3000;

// SSL-Zertifikat laden
const key = fs.readFileSync(path.join(__dirname, 'ssl', 'key.pem'));
const cert = fs.readFileSync(path.join(__dirname, 'ssl', 'cert.pem'));
const server = https.createServer({ key, cert }, app);

// Statischer Ordner für die Webseite
app.use(express.static(path.join(__dirname, '../frontend')));

// API-Route
app.use('/api', api);

// Startet den Server
server.listen(port, () => {
  console.log(`Server läuft unter https://localhost:${port}`);
});
