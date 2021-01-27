import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FreelasController from '../controllers/FreelasController';
import ListAllFreelasByStatusController from '../controllers/ListAllFreelasByStatusController';
import ListFreelaByIdController from '../controllers/ListFreelaByIdController';
import UpdateStatusOfProjectController from '../controllers/UpdateStatusOfProjectController';
import ListAllFreelasOfUserController from '../controllers/ListAllFreelasOfUserController';

const freelasRoutes = Router();
const freelasController = new FreelasController();
const listAllFreelasByStatusController = new ListAllFreelasByStatusController();
const listFreelaByIdController = new ListFreelaByIdController();
const updateStatusOfProjectController = new UpdateStatusOfProjectController();
const listAllFreelasOfUserController = new ListAllFreelasOfUserController();
freelasRoutes.use(ensureAuthenticated);

freelasRoutes.get('/:id', listFreelaByIdController.index);
freelasRoutes.get('/me', listAllFreelasOfUserController.index);
freelasRoutes.get('/', listAllFreelasByStatusController.index);
freelasRoutes.post('/', freelasController.create);
freelasRoutes.patch('/update/status', updateStatusOfProjectController.index);

export default freelasRoutes;
