import { Router } from 'express';
import ordersController from '../controllers/ordersController';

const routers = Router();

routers.get('/', ordersController.getAllOrders);

export default routers;
