import { Router } from 'express';
import usersController from '../controllers/usersController';

const routers = Router();

routers.post('/', usersController.createUser);

export default routers;
