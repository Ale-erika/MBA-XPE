import livroRepository from "../repositories/livro.repository.js";
import vendaRepository from "../repositories/venda.repository.js";
import clienteRepository from "../repositories/cliente.repository.js";

async function createVenda(venda) {
  if (!(await clienteRepository.getCliente(venda.clienteId))) {
    throw new Error("O cliente id informado não existe");
  }

  const livro = await livroRepository.getLivro(venda.livroId);
  if (!livro) {
    throw new Error("Livro informado não existe");
  }

  if (livro.estoque > 0) {
    venda = await vendaRepository.insertVenda(venda);
    livro.estoque--;
    await livroRepository.updateLivro(livro);
    return venda;
  } else {
    throw new Error("O livro informado não possui estoque");
  }
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

async function getVendas(clienteId, autorId, livroId) {
  if (clienteId) {
    return await vendaRepository.getVendasByClienteId(clienteId);
  }
  if (autorId) {
    return await vendaRepository.getVendasByAutorId(autorId);
  }
  if (livroId) {
    return await vendaRepository.getVendasByLivroId(livroId);
  }
  return await vendaRepository.getVendas();
}

export default {
  createVenda,
  getVendas,
  getVenda,
};
