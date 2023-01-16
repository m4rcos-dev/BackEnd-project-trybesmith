import { Router } from 'express';
import usersController from '../controllers/usersController';
import validLogin from '../middlewares/validLogin';

const routers = Router();

routers.post('/', validLogin, usersController.login);

export default routers;
