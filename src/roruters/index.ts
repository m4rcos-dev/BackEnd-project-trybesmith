import { Router } from 'express';
import productsController from '../controllers/productsController';
import usersController from '../controllers/usersController';
import validLogin from '../middlewares/validLogin';

const route = Router();

route.get('/products', productsController.getAll);
route.post('/login', validLogin, usersController.login);

export default route;
