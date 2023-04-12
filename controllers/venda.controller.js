import vendaService from "../services/venda.service.js";

async function createVenda(req, res, next) {
  try {
    let venda = req.body;

    if (!venda.valor || !venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error("Valor, data, clienet ID e livro ID são obrigatórios.");
    }
    res.send(await vendaService.createVenda(venda));
    logger.info(`POST /venda - ${JSON.stringify(venda)}`);
  } catch (err) {
    next(err);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(
      await vendaService.getVendas(
        req.query.clienteId,
        req.query.autorId,
        req.query.livroId
      )
    );
    logger.info("GET /venda");
  } catch (err) {
    next(err);
  }
}

async function getVenda(req, res, next) {
  try {
    res.send(await vendaService.getVenda(req.params.id));
    logger.info("GET /venda");
  } catch (err) {
    next(err);
  }
}

export default {
  createVenda,
  getVendas,
  getVenda,
};
