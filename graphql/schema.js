// graphql/schema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');
const { createUser, getUserById } = require('../controller/user.controller');
const { createOrder, getUserOrders } = require('../controller/order.controller');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: { type: GraphQLString },
    orderKey: { type: GraphQLString },
    orderDate: { type: GraphQLString },
    totalAmount: { type: GraphQLString },
    userId: { type: GraphQLString },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (_, args) => getUserById(_, args),
    },
    orders: {
      type: new GraphQLList(OrderType),
      args: { userId: { type: GraphQLString } },
      resolve: (_, args) => getUserOrders(_, args),
    },
  },
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: { 
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
       },
      resolve: (_, args) => createUser(_, args),
    },
    createOrder: {
      type: OrderType,
      args: { 
        orderKey: { type: GraphQLString },
        orderDate: { type: GraphQLString },
        totalAmount: { type: GraphQLString },
        userId: { type: GraphQLString },
       },
      resolve: (_, args) => createOrder(_, args),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
