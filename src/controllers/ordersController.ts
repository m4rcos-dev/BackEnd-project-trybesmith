import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAllOrders = async (_req: Request, res: Response) => {
  const orders = await ordersService.getAllOrders();
  res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { body } = req;
  const order = await ordersService.createOrder(body);
  // console.log('CONTROLLER', order);

  res.status(201).json(order);
};

export default { getAllOrders, createOrder };
