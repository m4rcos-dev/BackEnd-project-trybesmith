import { Router } from 'express';
import productsController from '../controllers/productsController';

const routers = Router();

routers.get('/', productsController.getAll);
routers.post('/', productsController.createProduct);

export default routers;
