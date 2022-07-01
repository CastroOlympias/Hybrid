const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// You can run this server in Concurrently using react with a REST API
// this code here app.get causes an error not allowing to fetch data from the REST API
// SyntaxError: Unexpected token < in JSON at position 0
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/public/index.html'));
// })



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Use this to log mongo queries being executed!
// mongoose.set('debug', true);

// app.use(require('./routes'));

// app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
