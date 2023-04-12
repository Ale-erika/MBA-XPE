import mongoose from "mongoose";

const LivroInfoSchema = new mongoose.Schema(
  {
    livroId: Number,
    descricao: String,
    paginas: String,
    editora: String,
    avaliacoes: Array,
  },
  { collection: "livroInfo" }
);

export default LivroInfoSchema;
