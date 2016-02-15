import Ticket from '../models/ticket';

export function getLastTicket(req, res) {
  const { userId } = req.params;
  const { limit } = req.query;

  Ticket.find({ userId: userId })
    .sort('-created')
    .limit(limit)
    .exec()
    .then(tickets => {
      res.json(tickets);
    });
}

export function getTicket(req, res) {
  const { ticketId, busId, cityId } = req.params;

  Ticket.findOne({
    _id: ticketId,
    busId,
    cityId
  })
    .then(ticket => {
      if (!ticket) {
        res.sendStatus(404);
      }

      res.json(ticket);
    })
    .catch(err => {
      res.sendStatus(404);
    });
}

export function getTickets(req, res) {
  const { busId, cityId } = req.params;

  console.log(busId, cityId);
  Ticket.find({
    busId,
    cityId
  })
    .then(tickets => {
      res.json(tickets);
    });
}

export function createTicket(req, res) {
  const { userId } = req.body;
  const { busId, cityId } = req.params;

  Ticket.create({
    userId,
    busId,
    cityId
  })
    .then(ticket => {
      res.json(ticket);
    });
}

export function removeTicket(req, res) {
  const { ticketId, busId, cityId } = req.params;

  Ticket.remove({
    _id: ticketId,
    busId,
    cityId
  })
    .then(() => {
      res.sendStatus(204);
    });
}
