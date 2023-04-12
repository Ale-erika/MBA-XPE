import livroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
  try {
    let livro = req.body;

    if (!livro.nome || !livro.valor || !livro.estoque) {
      throw new Error("Nome, valor, e estoque são obrigatórios.");
    }
    res.send(await livroService.createLivro(livro));
    loggers.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await livroService.getLivros(req.query.autorId));
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await livroService.getLivro(req.params.id));
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function createLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro Id é obrigatório");
    }
    await livroService.createLivroInfo(livroInfo);
    res.end();
    logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;

    if (
      !livro.livroId ||
      !livro.nome ||
      !livro.valor ||
      !livro.estoque ||
      !livro.autorId
    ) {
      throw new Error(
        "Livro Id, Nome, valor, estoque e autorId são obrigatórios"
      );
    }

    livro = await livroService.updateLivro(livro);
    res.send(livro);
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  try {
    await livroService.deleteLivro(req.params.id);
    res.end();
    logger.info("DELETE /livro");
  } catch (err) {
    next(err);
  }
}

export default {
  createLivro,
  getLivros,
  getLivro,
  createLivroInfo,
  updateLivro,
  deleteLivro,
};
