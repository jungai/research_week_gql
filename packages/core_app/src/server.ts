import express, { Express } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schemas';

export function setupCor(e: Express) {
    return e.use(cors());
}

export function setupGql(e: Express) {
    return e.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: process.env.ENV === 'development', // same as active shell
        }),
    );
}

export const app = [setupCor, setupGql].reduce((e, middleware) => middleware(e), express());
