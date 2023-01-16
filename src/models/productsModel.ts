import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TProducts } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProducts[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products');
  return rows;
};

const createProduct = async (product: TProducts): Promise<TProducts> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const result = { id: response.insertId, ...product };
  return result;
};

export default { getAll, createProduct };
