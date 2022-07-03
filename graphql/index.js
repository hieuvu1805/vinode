const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const tracking = require("./tracking");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    ${tracking.query}
  }
  type Mutation {
    ${tracking.mutation}
  }
  ${tracking.type}
`);

module.exports = graphqlHTTP({
  schema: schema,
  rootValue: {
    hello: () => {
      return "Hello graphQL!";
    },
    ...tracking.resolver,
  },
  graphiql: true,
});
