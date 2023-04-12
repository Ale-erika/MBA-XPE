import mongodb from "mongodb";

function getClient() {
  const uri = "mongodb+srv://root:teste@cluster1.qpyk6o3.mongodb.net/test";
  return new mongodb.MongoClient(uri);
}

export { getClient };

//import mongoose from "mongoose";

// async function connect() {
//   const uri =
//     "mongodb+srv://root:prHiia2rNZlTCUK0@cluster1.qpyk6o3.mongodb.net/test";
//   return await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

//export { connect };
