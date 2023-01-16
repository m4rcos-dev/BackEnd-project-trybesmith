import { Request, Response } from 'express';
import productsService
  from '../services/productsService';

const getAll = async (_req: Request, res: Response) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const result = await productsService.createProduct(body);
  res.status(201).json(result);
};

export default { getAll, createProduct };
