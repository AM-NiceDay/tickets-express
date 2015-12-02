import {Router} from 'express';
import config from '../config';
import User from '../models/user';
import {authenticate, ensureAuthenticated} from '../controllers/authController';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/secured', ensureAuthenticated, (req, res) => {
  res.send('secured');
});

router.post('/users', (req, res) => {
  User.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      email: req.body.email
    })
    .then(user => res.json({
      user
    }));
});

router.post('/authenticate', authenticate);

export default router;
