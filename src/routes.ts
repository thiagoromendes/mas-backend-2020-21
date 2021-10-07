import {Router} from 'express';
import { ActivyController } from './controller/ActivyController';
import { CourseUnitController } from './controller/CourseUnitController';
import { UserContoller } from './controller/UserContoller';

const userController = new UserContoller();
const courseUnitController = new CourseUnitController();
const activyController = new ActivyController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/activy', activyController.create);
routes.post('/courseunit', courseUnitController.create);

export default routes;