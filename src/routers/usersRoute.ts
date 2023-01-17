import { Router } from 'express';
import usersController from '../controllers/usersController';
import validUsers from '../middlewares/validUsers';

const routers = Router();

routers.post('/', validUsers, usersController.createUser);

export default routers;
