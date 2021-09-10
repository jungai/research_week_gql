import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLFieldResolver } from 'graphql';
import { prisma } from '../../../utils';

export const montonJeanType = new GraphQLObjectType({
    name: 'MontonJean',
    description: 'มณฑลจีนไทยในอนาคต',
    fields: () => ({
        monton_id: { type: GraphQLNonNull(GraphQLString) },
        monton_code: { type: GraphQLNonNull(GraphQLString) },
        monton_name: { type: GraphQLNonNull(GraphQLString) },
    }),
});

export const montonJeanArgs = {
    id: { type: GraphQLInt },
};

// TODO: fix types ??
export const montonJeanResolver: GraphQLFieldResolver<any, any> = (_, args) => {
    return prisma.monton_jean.findMany({
        where: { monton_id: args?.id },
    });
};
