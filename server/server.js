const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const db = require('./configuration/Database');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(require('./routes'));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 API server running on port ${PORT}!`);
    console.log(`🌍 Use GraphQL at http://localhost:${PORT}`);
  });
});