import { RowDataPacket } from 'mysql2/promise';
import { TUsers } from '../types';
import connection from './connection';

const getByUsername = async (username: string): Promise<TUsers | undefined> => {
  const [[user]] = await connection
    .execute<RowDataPacket[]
  & TUsers[]>('SELECT * FROM Trybesmith.users WHERE username = ?;', [username]);

  return user;
};

export default { getByUsername };
