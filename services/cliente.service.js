import clienteRepository from "../repositories/cliente.repository.js";
import vendaRepository from "../repositories/venda.repository.js";

async function createCliente(cliente) {
  return await clienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await clienteRepository.getClientes();
}

async function getCliente(id) {
  return await clienteRepository.getCliente(id);
}

async function updateCliente(cliente) {
  return await clienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  const venda = await vendaRepository.getVendasByClienteId(id);
  if (venda.length > 0) {
    throw new Error("Não é possível excluir cliente com vendas cadastradas");
  }
  await clienteRepository.deleteCliente(id);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente,
};
