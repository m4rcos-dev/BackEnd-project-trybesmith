import express from 'express';
import productsRoute from './roruters/productsRoute';
import loginRoute from './roruters/loginRoute';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/login', loginRoute);

export default app;
