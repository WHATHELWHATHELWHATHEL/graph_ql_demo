import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => new Promise((resolve) => {
          setTimeout(
            () => resolve('delay message'),
            5 * 1000
          );
        }),
      },
    },
  }),
});

const query = '{ hello }';

graphql(schema, query).then(result => console.log(result));
