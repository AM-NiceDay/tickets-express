import Bus from '../models/bus';
import CityBusSequences from '../models/cityBusSequences';

export function getBus(req, res) {
  const { busId, cityId } = req.params;

  Bus.findOne({
    _id: busId,
    cityId
  })
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
  const { cityId } = req.params;

  Bus.find({
    cityId
  })
    .then(buses => {
      res.json(buses);
    });
}

export function createBus(req, res) {
  const { route, routeName } = req.body;
  const { cityId } = req.params;

  CityBusSequences.findOneAndUpdate({ cityId: cityId }, { $inc: { seq: 1 } }, { upsert: true, new: true })
    .then(citySequence => {
      return Bus.create({
        _id: citySequence.seq,
        route,
        routeName,
        cityId: cityId
      });
    })
    .then(bus => {
      res.json(bus);
    });
}

export function removeBus(req, res) {
  const { busId, cityId } = req.params;

  Bus.remove({
    _id: busId,
    cityId
  })
    .then(() => {
      res.sendStatus(204);
    });
}
