import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const Cliente = new GraphQLObjectType({
  name: "Cliente",
  fields: () => ({
    clienteId: {
      type: GraphQLInt,
    },
    nome: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    senha: {
      type: GraphQLString,
    },
    telefone: {
      type: GraphQLString,
    },
    endereco: {
      type: GraphQLString,
    },
  }),
});

export default Cliente;
