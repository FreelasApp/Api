import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FreelasController from '../controllers/FreelasController';
import ListAllFreelasByStatusController from '../controllers/ListAllFreelasByStatusController';
import ListFreelaByIdController from '../controllers/ListFreelaByIdController';

const freelasRoutes = Router();
const freelasController = new FreelasController();
const listAllFreelasByStatusController = new ListAllFreelasByStatusController();
const listFreelaByIdController = new ListFreelaByIdController();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.get('/:id', listFreelaByIdController.index);
freelasRoutes.get('/', listAllFreelasByStatusController.index);
freelasRoutes.post('/', freelasController.create);

export default freelasRoutes;
