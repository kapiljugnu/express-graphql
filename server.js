const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.dbString);
mongoose.connection.once('open', ()=>{
  console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(8200, () => console.log('server running'));