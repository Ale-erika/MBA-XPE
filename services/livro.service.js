import autorRepository from "../repositories/autor.repository.js";
import livroRepository from "../repositories/livro.repository.js";
import livroInfoRepository from "../repositories/livroInfo.repository.js";
import vendaRepository from "../repositories/venda.repository.js";

async function createLivro(livro) {
  return await livroRepository.insertLivro(livro);
}

async function getLivros(autorId) {
  if (autorId) {
    return await livroRepository.getLivrosByAutorId(autorId);
  }
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  const livro = await livroRepository.getLivro(id);
  livro.info = await livroInfoRepository.getLivroInfo(parseInt(id));
  return livro;
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function createLivroInfo(livroInfo) {
  await livroInfoRepository.createLivroInfo(livroInfo);
}

async function deleteLivro(id) {
  const venda = await vendaRepository.getVendasByLivroId(id);
  if (venda.length > 0) {
    throw new Error("Não é possível excluir livro com vendas cadastradas");
  }
  await livroRepository.deleteLivro(id);
}

export default {
  createLivro,
  getLivros,
  getLivro,
  createLivroInfo,
  updateLivro,
  deleteLivro,
};
