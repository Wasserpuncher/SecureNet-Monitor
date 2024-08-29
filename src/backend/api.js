// src/backend/api.js

const express = require('express');
const router = express.Router();
const data = require('../json/data.json');

// API-Route: Gibt JSON-Daten zurück
router.get('/data', (req, res) => {
  res.json(data);
});

module.exports = router;
