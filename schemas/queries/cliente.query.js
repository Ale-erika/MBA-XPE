import { GraphQLList, GraphQLInt } from "graphql";
import Cliente from "../types/cliente.type.js";
import clienteService from "../../services/cliente.service.js";

const clienteQueries = {
  getClientes: {
    type: new GraphQLList(Cliente),
    resolve: () => clienteService.getClientes(),
  },
  getCliente: {
    type: Cliente,
    args: {
      id: {
        nome: "id",
        type: GraphQLInt,
      },
    },
    resolve: (_, args) => clienteService.getCliente(args.id),
  },
};

export default clienteQueries;
