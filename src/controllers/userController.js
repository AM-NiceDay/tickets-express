import User from '../models/user';

export function createUser(req, res) {
  const { name, phoneNumber, password, email, cityId } = req.body;

  User.create({
      name,
      phoneNumber,
      password,
      email,
      cityId
    })
    .then(user => res.json({
      user
    }));
}
