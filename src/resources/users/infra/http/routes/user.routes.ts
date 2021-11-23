import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/uploads';
import ensureAuthenticated from '@infra/http/middlewares/ensureAuthenticated';
import ListAllChatsFromUserController from '@resources/messages/infra/http/controllers/ListAllChatsFromUserController';
import ListMessagesFromUserController from '@resources/messages/infra/http/controllers/ListMessagesFromUserController';
import UpdateAvatarController from '../controllers/UpdateAvatarController';

import ListUserByIdController from '../controllers/ListUserByIdController';
import UserController from '../controllers/UserController';

const userRoutes = Router();
const upload = multer({
  storage: uploadConfigs.multer,
});

const updateAvatarController = new UpdateAvatarController();
const userController = new UserController();
const listserByIdController = new ListUserByIdController();
const listAllChatsFromUserController = new ListAllChatsFromUserController();
const listMessagesFromUserController = new ListMessagesFromUserController();

userRoutes.post('/', userController.create);

userRoutes.use(ensureAuthenticated);

userRoutes.get('/chats', listAllChatsFromUserController.index);
userRoutes.get('/:id', listserByIdController.index);

userRoutes.put('/', userController.update);

userRoutes.get('/messages/:userId', listMessagesFromUserController.index);

userRoutes.patch(
  '/avatar',
  upload.single('avatar'),
  updateAvatarController.index,
);
export default userRoutes;
