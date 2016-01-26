import Bus from '../models/bus';
import CityBusSequences from '../models/cityBusSequences';

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
  const { route, routeName, cityId } = req.body;

  CityBusSequences.getSeqAndIncrement(cityId)
    .then(seq => {
      return Bus.create({
        _id: seq,
        route,
        routeName,
        cityId: cityId
      });
    })
    .then(bus => {
      res.json(bus);
    })
    .catch(err => {
      console.log(err);
    });
}

export function removeBus(req, res) {
  Bus.remove({ _id: req.params.busId })
    .then(() => {
      res.sendStatus(204);
    });
}
