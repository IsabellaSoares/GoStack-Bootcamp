import { Router } from 'express';
import appoitmentsRouter from './appoitments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);
routes.use('/users', usersRouter);

export default routes;
