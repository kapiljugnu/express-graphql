const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();


const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = { message: () => 'Hello World!' };

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8200, () => console.log('server running'));