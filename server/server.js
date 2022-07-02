// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const app = express();
// const db = require('./configuration/Database');
// const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(require('./routes'));

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`🌍 API server running on port ${PORT}!`);
//     console.log(`🌍 Use GraphQL at http://localhost:${PORT}`);
//   });
// });

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const {typeDefs, resolvers} = require('./connections')
const { authMiddleware } = require('./configuration/Authentication');
const db = require('./configuration/Database');
// Once you have concruently installed npm start at root, with your react client side app installed, change the port to 3001, otherwise, for backend only, using Apollo Studio, use 3000
const PORT = process.env.PORT || 3001;

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
      });
      await server.start();
      const app = express();
      server.applyMiddleware({ app });
      
      app.use(express.urlencoded({ extended: false }));
      app.use(express.json());
 
      if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')));
      }

      // While this is fine with other full stack MERN apps, this prevents react from consuming REST API data for my hybrid MERNSTACK using REST APIs
      // app.get('*', (req, res) => {
      //   res.sendFile(path.join(__dirname, '../client/build/index.html'));
      // })
      
      app.use(require('./routes'));

      db.once('open', () => {
        app.listen(PORT, () => {
          console.log(`🌍 API server running on port ${PORT}!`);
          console.log(`🌍 Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
      });
}
startApolloServer();