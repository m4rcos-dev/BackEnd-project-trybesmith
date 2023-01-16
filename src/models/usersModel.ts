import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { TUsers } from '../types';
import connection from './connection';

const getByUsername = async (username: string): Promise<TUsers | undefined> => {
  const [[user]] = await connection
    .execute<RowDataPacket[]
  & TUsers[]>('SELECT * FROM Trybesmith.users WHERE username = ?;', [username]);

  return user;
};

const createUser = async (user: TUsers): Promise<TUsers> => {
  const { username, vocation, level, password } = user;
  const [response] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );
  const result = { id: response.insertId, ...user };
  return result;
};

export default { getByUsername, createUser };
