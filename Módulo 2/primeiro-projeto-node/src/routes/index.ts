import { Router } from 'express';
import appoitmentsRouter from './appoitments.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);

export default routes;
