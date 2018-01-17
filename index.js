import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    Title: String,
    Hello: [Test]
  }
  type Test {
    TestValue: String,
    TestRandom: String,
  }
`);

const getTest = () => ({
  TestValue: () => `TestValue: ${Math.random()}}`,
  TestRandom: () => new Promise(resolve => (
    setTimeout(() => resolve(`TestRandom: ${Math.random()}`), 5000)
  )),
});

const root = {
  Hello: () => [1, 2, 3, 4, 5, 6].map(() => getTest()),
  Title: () => `Title ${Math.random()}`,
};


const app = express();

app.use('/', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
