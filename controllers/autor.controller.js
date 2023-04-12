import autorService from "../services/autor.service.js";
import clienteService from "../services/cliente.service.js";

async function createAutor(req, res, next) {
  try {
    let autor = req.body;

    if (!autor.nome || !autor.email || !autor.telefone) {
      throw new Error("Nome, email e telefone são obrigatórios.");
    }
    res.send(await autorService.createAutor(autor));
    loggers.info(`POST /autor - ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

async function getAutores(req, res, next) {
  try {
    res.send(await autorService.getAutores());
    logger.info("GET /autor");
  } catch (err) {
    next(err);
  }
}

async function getAutor(req, res, next) {
  try {
    res.send(await autorService.getAutor(req.params.id));
    logger.info("GET /autor");
  } catch (err) {
    next(err);
  }
}

async function updateAutor(req, res, next) {
  try {
    let autor = req.body;
    if (!autor.autorId || !autor.nome || !autor.email || !autor.telefone) {
      throw new error("Autor id, nome, email e telefone devem ser informados");
    }
    autor = await autorService.updateAutor(autor);
    res.send(autor);
    logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAutor(req, res, next) {
  try {
    await autorService.deleteAutor(req.params.id);
    logger.info("DELETE /client");
  } catch (err) {
    next(err);
  }
}

export default {
  createAutor,
  getAutores,
  getAutor,
  updateAutor,
  deleteAutor,
};
