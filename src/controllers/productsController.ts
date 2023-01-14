import { Request, Response } from 'express';
import productsService
  from '../services/productsService';

const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

export default { getAll };
