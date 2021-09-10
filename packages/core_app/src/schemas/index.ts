import { GraphQLObjectType, GraphQLList, GraphQLSchema } from 'graphql';
import { montonJeanType, montonJeanArgs, montonJeanResolver } from './monton_jean';

const rootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        getMontonJean: {
            type: GraphQLList(montonJeanType),
            args: montonJeanArgs,
            resolve: montonJeanResolver,
        },
    }),
});

export const schema = new GraphQLSchema({
    query: rootQueryType,
});
