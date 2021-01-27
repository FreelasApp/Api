import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ListAllFreelasOfUserController from '../controllers/ListAllFreelasOfUserController';

const freelasUserRoutes = Router();

const listAllFreelasOfUserController = new ListAllFreelasOfUserController();
freelasUserRoutes.use(ensureAuthenticated);

freelasUserRoutes.get('/', listAllFreelasOfUserController.index);

export default freelasUserRoutes;
