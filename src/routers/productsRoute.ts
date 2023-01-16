import { Router } from 'express';
import productsController from '../controllers/productsController';
import validProducts from '../middlewares/validProducts';

const routers = Router();

routers.get('/', productsController.getAll);
routers.post('/', validProducts, productsController.createProduct);

export default routers;
