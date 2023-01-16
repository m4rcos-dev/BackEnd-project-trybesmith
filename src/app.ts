import express from 'express';
import productsRoute from './roruters/productsRoute';
import loginRoute from './roruters/loginRoute';
import usersRoute from './roruters/usersRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);

export default app;
