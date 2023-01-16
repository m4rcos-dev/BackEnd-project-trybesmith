import { TProducts } from '../types';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<TProducts[]> => {
  const products = await productsModel.getAll();
  return products;
};

const createProduct = async (product: TProducts): Promise<TProducts> => {
  const result = productsModel.createProduct(product);
  return result;
};

export default { getAll, createProduct };
