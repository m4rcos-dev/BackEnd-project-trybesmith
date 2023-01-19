import ordersModel from '../models/ordersModel';
import { TCurrentUser, TOrders } from '../types';

const getAllOrders = async (): Promise<TOrders[]> => {
  const orders: TOrders[] = await ordersModel.getAllOrders();
  return orders;
};

const createOrder = async (body: TCurrentUser) => {
  const result = await ordersModel.createOrder(body);
  // console.log('SERVICE:', result);

  return result;
};

export default { getAllOrders, createOrder };
