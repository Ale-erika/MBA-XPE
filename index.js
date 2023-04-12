import express from "express";
import cors from "cors";
import winston from "winston";
import basicAuth from "express-basic-auth";
import clientesRouter from "./routes/cliente.route.js";
import vendasRouter from "./routes/venda.route.js";
import livrosRouter from "./routes/livro.route.js";
import autoresRouter from "./routes/autor.route.js";
import Schema from "./schemas/cliente.schema.js";
import { graphqlHTTP } from "express-graphql";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp}[${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "livraria-application.log" }),
  ],
  format: combine(label({ label: "livraria-api" }), timestamp(), myFormat),
});
const app = express();
app.use(express.json());
app.use(cors());

function getRole(username) {
  if (username == "admin") {
    return "admin";
  }
}

function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.auth.user) {
      const role = getRole(req.auth.user);

      if (isAllowed(role)) {
        next();
      } else {
        res.status(401).send("Acesso não permitido");
      }
    } else {
      res.status(403).send("Usuário não informado");
    }
  };
}

app.use(
  basicAuth({
    authorizer: (username, password) => {
      const userMatches = basicAuth.safeCompare(username, "admin");
      const pwdMatches = basicAuth.safeCompare(password, "desafio-igti-nodejs");

      return userMatches && pwdMatches;
    },
  })
);

app.use("/cliente", authorize("admin"), clientesRouter);
app.use("/venda", authorize("admin"), vendasRouter);
app.use("/livro", authorize("admin"), livrosRouter);
app.use("/autor", authorize("admin"), autoresRouter);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
app.listen(3000, () => console.log("API Started!"));
