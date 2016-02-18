import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../config';

export function getUser(req, res) {
  const { phoneNumber } = req.params;

  User.findOne({ phoneNumber })
    .then(user => {
      res.json({
        user: {
          phoneNumber: user.phoneNumber,
          name: user.name
        }
      });
    });
}

export function createUser(req, res) {
  const { name, phoneNumber, password, email, cityId } = req.body;

  User.create({
      name,
      phoneNumber,
      password,
      email,
      cityId
    })
    .then(user => {
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
    });
}
