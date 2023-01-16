import { TOrders } from '../types';
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

export default { getAllOrders };
