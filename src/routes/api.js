import {Router} from 'express';
import {authenticate, ensureAuthenticated} from '../controllers/authController';
import {createUser} from '../controllers/userController';

const router = Router();

router.post('/users', createUser);

router.post('/authenticate', authenticate);

export default router;
