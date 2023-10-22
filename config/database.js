const { Sequelize } = require("sequelize");
const env = process.env;

const sequelize = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USERNAME,
  env.DATABASE_PASSWORD,
  {
    host: env.DATABASE_HOST,
    dialect: env.DATABASE_DIALECT ?? "mysql", // or any other supported dialect
    port: env.DATABASE_PORT ?? 3306,
  }
);

module.exports = sequelize;
