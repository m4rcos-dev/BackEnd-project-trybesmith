import { TProducts } from '../types';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<TProducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

export default { getAll };
