import Bus from '../models/bus';

export function getBus(req, res) {
  Bus.findOne({ _id: req.params.busId })
    .then(bus => {
      if (!bus) {
        res.sendStatus(404);
      }

      res.json(bus);
    })
    .catch(err => {
      res.sendStatus(404);
    });
}

export function getBuses(req, res) {
  Bus.find()
    .then(buses => {
      res.json(buses);
    });
}

export function createBus(req, res) {
  const { route, routeName } = req.body;

  Bus.create({
    route,
    routeName
  })
    .then(bus => {
      res.json(bus);
    });
}

export function removeBus(req, res) {
  Bus.remove({ _id: req.params.busId })
    .then(() => {
      res.sendStatus(204);
    });
}
