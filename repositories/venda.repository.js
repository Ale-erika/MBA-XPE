import Venda from "../models/venda.model.js";
import Livro from "../models/livro.model.js";

async function insertVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (err) {
    throw err;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll();
  } catch (err) {
    throw err;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getVendasByClienteId(clienteId) {
  try {
    return await Venda.findAll({
      where: {
        clienteId: clienteId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getVendasByAutorId(autorId) {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Livro,
          where: {
            autorId: autorId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendasByLivroId(livroId) {
  try {
    return await Venda.findAll({
      where: {
        livroId: livroId,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertVenda,
  getVendas,
  getVenda,
  getVendasByClienteId,
  getVendasByAutorId,
  getVendasByLivroId,
};
