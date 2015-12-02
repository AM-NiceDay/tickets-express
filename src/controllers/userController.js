import User from '../models/user';

export function createUser(req, res) {
  User.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      email: req.body.email
    })
    .then(user => res.json({
      user
    }));
}
