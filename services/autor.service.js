import autorRepository from "../repositories/autor.repository.js";
import livroRepository from "../repositories/livro.repository.js";

async function createAutor(autor) {
  return await autorRepository.insertAutor(autor);
}

async function getAutores() {
  return await autorRepository.getAutores();
}

async function getAutor(id) {
  return await autorRepository.getAutor(id);
}

async function updateAutor(autor) {
  return await autorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  const livro = await livroRepository.getLivrosByAutorId(id);
  if (livro.length > 0) {
    throw new Error("Não é possível excluir autor com livros vinculados");
  }
  return await autorRepository.deleteAutor(id);
}

export default {
  createAutor,
  getAutores,
  getAutor,
  updateAutor,
  deleteAutor,
};
