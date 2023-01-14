import { RowDataPacket } from 'mysql2/promise';
import { TProducts } from '../types';
import connection from './connection';

const getAll = async (): Promise<TProducts[]> => {
  const [rows] = await connection
    .execute<RowDataPacket[] & TProducts[]>('SELECT * FROM Trybesmith.products');
  return rows;
};

export default { getAll };
