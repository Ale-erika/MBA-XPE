import { getClient } from "./mongo.db.js";

async function createLivroInfo(livroInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client.db("library").collection("livroInfo").insertOne(livroInfo);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getLivroInfo(livroId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db("library")
      .collection("livroInfo")
      .findOne({ livroId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default { createLivroInfo, getLivroInfo };

// import { connect } from "mongoose";
// import LivroInfoSchema from "../schemas/livroInfo.schema.js";

// async function createLivroInfo(livroInfo) {
//   try {
//     const mongoose = await connect();
//     const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
//     livroInfo = new LivroInfo(livroInfo);
//     await livroInfo.save();
//   } catch (err) {
//     throw err;
//   }
// }

// async function getLivroInfo(livroId) {
//   try {
//     const mongoose = await connect();
//     const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
//     const query = LivroInfo.findOne({ livroId });
//     return await query.exec();
//   } catch (err) {
//     throw err;
//   }
// }

// async function getLivrosInfo() {
//   try {
//     const mongoose = await connect();
//     const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
//     const query = LivroInfo.find({});
//     return await query.exec();
//   } catch (err) {
//     throw err;
//   }
// }

// export default {
//   createLivroInfo,
//   getLivroInfo,
//   getLivroInfo,
// };
