import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import auth from '../middlewares/auth';
import validOrder from '../middlewares/validOrder';

const routers = Router();

routers.get('/', ordersController.getAllOrders);
routers.post('/', auth, validOrder, ordersController.createOrder);

export default routers;
