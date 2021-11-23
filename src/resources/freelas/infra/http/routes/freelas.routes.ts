import { Router } from 'express';

import ensureAuthenticated from '@infra/http/middlewares/ensureAuthenticated';
import FreelasController from '../controllers/FreelasController';
import ListAllFreelasByStatusController from '../controllers/ListAllFreelasByStatusController';
import ListFreelaByIdController from '../controllers/ListFreelaByIdController';
import ListAllFreelasOfUserController from '../controllers/ListAllFreelasOfUserController';

const freelasRoutes = Router();
const freelasController = new FreelasController();
const listAllFreelasByStatusController = new ListAllFreelasByStatusController();
const listFreelaByIdController = new ListFreelaByIdController();
const listAllFreelasOfUserController = new ListAllFreelasOfUserController();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.get('/:id', listFreelaByIdController.index);
freelasRoutes.get('/', listAllFreelasByStatusController.index);
freelasRoutes.post('/', freelasController.create);
freelasRoutes.patch('/:freelaId', freelasController.update);

export default freelasRoutes;
