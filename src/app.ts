import express from 'express';
import productsRoute from './roruters/productsRoute';
import loginRoute from './roruters/loginRoute';
import usersRoute from './roruters/usersRoute';
import orderRoute from './roruters/orderRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/orders', orderRoute);

export default app;
