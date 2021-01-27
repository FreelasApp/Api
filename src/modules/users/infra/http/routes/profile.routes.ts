import { Router } from 'express';
import multer from 'multer';
import uploadConfigs from '@configs/uploads';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UpdateAvatarController from '../controllers/UpdateAvatarController';
import UpdateProfileController from '../controllers/UpdateProfileController';
import ListserByIdController from '../controllers/ListserByIdController';

const profileRoutes = Router();
const upload = multer({
  storage: uploadConfigs.multer,
});
profileRoutes.use(ensureAuthenticate);

const updateAvatarController = new UpdateAvatarController();
const updateProfileController = new UpdateProfileController();
const listserByIdController = new ListserByIdController();

profileRoutes.patch(
  '/avatar',
  upload.single('avatar'),
  updateAvatarController.index,
);

profileRoutes.get('/:id', listserByIdController.index);

profileRoutes.post('/update', updateProfileController.index);
export default profileRoutes;
