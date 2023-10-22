require("dotenv").config();
const User = require("./models/user.model");
const Order = require("./models/order.model");
const { faker } = require("@faker-js/faker");
const sequelize = require("./config/database");

async function insertUsers() {
  try {
    for (let i = 0; i < 1000; i++) {
      await User.create({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
      });
    }

    console.log("1000 users inserted successfully.");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
}

async function insertOrders() {
  try {
    // Get all user IDs from the users table
    const users = await User.findAll({ attributes: ["id"] });

    const userIds = users.map((user) => user.id);

    for (let i = 0; i < 5000; i++) {
      // Randomly select a user ID from the existing user IDs
      const randomUserId = userIds[Math.floor(Math.random() * userIds.length)];

      await Order.create({
        orderKey: faker.string.uuid(),
        orderDate: faker.date.past(),
        totalAmount: faker.commerce.price(),
        userId: randomUserId,
      });
    }

    console.log("5000 orders inserted successfully.");
  } catch (error) {
    console.error("Error inserting orders:", error);
  } finally {
    await sequelize.close();
  }
}

// Insert users first and then insert orders
insertUsers().then(() => {
  insertOrders();
});
