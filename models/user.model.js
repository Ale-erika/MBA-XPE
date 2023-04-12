import mongoose from "mongoose";

const user = mongoose.model("User", {
  email: String,
  senha: string,
});

export default user;
