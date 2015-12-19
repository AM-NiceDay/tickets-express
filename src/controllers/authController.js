import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';

export function authenticate(req, res) {
  if (!req.body.phoneNumber || !req.body.password) {
    return res.sendStatus(400);
  }

  User.findOne({
      phoneNumber: req.body.phoneNumber
    })
    .then(user => {
      if (!user || user.password !== req.body.password) {
        return res.sendStatus(403);
      }
      let userInfo = {
        id: user._id
      };
      let token = jwt.sign(userInfo, config.secret, {
        expiresIn: 86400
      });

      res.json({
        user,
        token
      });
    })
    .catch(console.log);
}

export function ensureAuthenticated(req, res, next) {
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