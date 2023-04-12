import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://ecxybmqs:9Dn-mQxkCndbgYm7TqAlEY1A1cDEscP7@raja.db.elephantsql.com/ecxybmqs",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
      atCreated: false,
      atUpdated: false,
    },
  }
);

export default sequelize;
