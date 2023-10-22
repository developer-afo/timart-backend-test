const Order = require("../models/order.model");
const User = require("../models/user.model");

async function createOrder(_, args) {
  try {
    const { orderKey, orderDate, totalAmount, userId } = args;

    // Validate fields
    if (!orderKey || !orderDate || !totalAmount || !userId) {
      throw new Error("All fields are required");
    }

    const userExists = await User.findByPk(userId);

    if (!userExists) throw new Error("User does not exist");

    const order = await Order.create({
      orderKey,
      orderDate,
      totalAmount,
      userId,
    });
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getUserOrders(_, args) {
  try {
    const { userId } = args;

    const userExists = await User.findByPk(userId);

    if (!userExists) {
      throw new Error("User not found");
    }

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createOrder,
  getUserOrders,
};
