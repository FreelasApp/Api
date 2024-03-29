import { Router } from 'express';
import userRoutes from '@modules/users/infra/http/routes/user.routes';
import sessionRoutes from '@modules/users/infra/http/routes/session.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import freelaRoutes from '@modules/freelas/infra/http/routes/freelas.routes';
import freelasUser from '@modules/freelas/infra/http/routes/freelasUser.routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/login', sessionRoutes);
routes.use('/profile', profileRoutes);
routes.use('/freelas', freelaRoutes);
routes.use('/user/freelas', freelasUser);

export default routes;
