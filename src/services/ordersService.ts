import ordersModel from '../models/ordersModel';
import { TOrders } from '../types';

const getAllOrders = async (): Promise<TOrders[]> => {
  const orders: TOrders[] = await ordersModel.getAllOrders();
  return orders;
};

export default { getAllOrders };
