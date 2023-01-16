import express from 'express';
import productsRoute from './routers/productsRoute';
import loginRoute from './routers/loginRoute';
import usersRoute from './routers/usersRoute';
import orderRoute from './routers/orderRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/orders', orderRoute);

export default app;
