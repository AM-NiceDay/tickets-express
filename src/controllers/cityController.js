import City from '../models/city';

export function getCity(req, res) {
  City.findOne({ _id: req.params.id })
    .then(city => {
      if (!city) {
        res.sendStatus(404);
      }

      res.json(city);
    })
    .catch(err => {
      res.sendStatus(404);
    });
}

export function getCities(req, res) {
  City.find()
    .then(cities => {
      res.json(cities);
    });
}

export function createCity(req, res) {
  const { name } = req.body;

  City.create({
      name
    })
    .then(city => {
      res.json(city);
    });
}

export function removeCity(req, res) {
  City.remove({ _id: req.params.id })
    .then(() => {
      res.sendStatus(204);
    });
}
