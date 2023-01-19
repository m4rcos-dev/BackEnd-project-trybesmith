import { ResultSetHeader } from 'mysql2/promise';
import { TCurrentUser, TOrders } from '../types';
import connection from './connection';

const getAllOrders = async (): Promise<TOrders[]> => {
  const query = `SELECT orders.id, orders.user_id as userId,
  JSON_ARRAYAGG(products.id) as productsIds
  FROM Trybesmith.orders
  INNER JOIN Trybesmith.products
  ON orders.id = products.order_id
  group by orders.id;`;

  const [result] = await connection.execute(query);
  return result as TOrders[];
};

const updateProduct = async (productId: number, idOrder: number): Promise<number> => {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  const values = [idOrder, productId];
  await connection.execute<ResultSetHeader>(query, values);
  return productId;
};

const createOrder = async (body: TCurrentUser) => {
  const { productsIds, currentUser } = body;
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const values = [currentUser.id];
  const [order] = await connection.execute<ResultSetHeader>(query, values);
  await Promise.all(productsIds.map(async (productId) => {
    const result = await updateProduct(productId, order.insertId);
    // console.log('UPDATE PRODUCT', result);

    return result;
  }));
  const result = { userId: currentUser.id, productsIds };
  // console.log('MODEL:', result);

  return result;
};

export default { getAllOrders, createOrder };
