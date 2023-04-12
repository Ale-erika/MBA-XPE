import { GraphQLSchema, GraphQLObjectType } from "graphql";
import clienteQuery from "./queries/cliente.query.js";

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...clienteQuery,
    },
  }),
  mutation: null,
});

export default Schema;
