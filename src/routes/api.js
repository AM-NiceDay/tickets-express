import {Router} from 'express';
import config from '../config';
import User from '../models/user';
import jwt from 'jsonwebtoken';

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

router.post('/authenticate', (req, res) => {
  User.findOne({
      phoneNumber: req.body.phoneNumber
    })
    .then(user => {
      if (!user || user.password !== req.body.password) {
        return res.sendStatus(403);
      }
      let userInfo = {
        id: user._id
      }
      let token = jwt.sign(userInfo, config.secret, {
        expiresIn: 86400
      });

      res.json({
        user,
        token
      });
    });
});

function ensureAuthenticated(req, res, next) {
  let token = req.body.token || req.headers['x-access-token'];

  if (!token) {
    return res.sendStatus(403);
  }

  jwt.verify(token, config.secret, function(err, user) {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

export default router;
