const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user.model");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    orderKey: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "order_key",
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "order_date",
    },
    totalAmount: {
      type: DataTypes.STRING,
      field: "total_amount",
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
      field: "user_id",
    },
  },
  { createdAt: "created_at", updatedAt: "updated_at" }
);

Order.belongsTo(User, { foreignKey: "user_id" });

module.exports = Order;
