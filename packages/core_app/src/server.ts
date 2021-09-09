import express, { Express } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

export function setupCor(e: Express) {
    return e.use(cors());
}

// TODO: separate module
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// TODO: separate module
// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
};

export function setupGql(e: Express) {
    return e.use(
        '/graphql',
        graphqlHTTP({
            schema: schema,
            rootValue: root,
            graphiql: process.env.ENV === 'development', // same as active shell
        }),
    );
}

export const app = [setupCor, setupGql].reduce((e, middleware) => middleware(e), express());
