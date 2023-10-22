require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const sequelize = require("./config/database");
const User = require("./models/user.model");
const Order = require("./models/order.model");
const schema = require("./graphql/schema");

const app = express();
const port = process.env.PORT ?? 3000;

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
}

syncDatabase();

const top10UsersWithOrdersQuery = `
  SELECT users.*, COUNT(orders.id) AS order_count
  FROM users
  JOIN orders ON users.id = orders.user_id
  GROUP BY users.id
  ORDER BY order_count DESC
  LIMIT 10;
`;

app.use(express.json());

app.get("/top10UsersWithOrders", async (_, res) => {
  top10UsersWithOrders = await sequelize.query(top10UsersWithOrdersQuery, {
    type: sequelize.QueryTypes.SELECT,
  });
  res.send(top10UsersWithOrders);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
