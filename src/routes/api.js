import {Router} from 'express';
import {authenticate, ensureAuthenticated} from '../controllers/authController';
import {createUser} from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/secured', ensureAuthenticated, (req, res) => {
  res.send('secured');
});

router.post('/users', createUser);

router.post('/authenticate', authenticate);

export default router;
