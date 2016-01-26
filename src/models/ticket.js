import mongoose, { Schema } from 'mongoose';
import _ from 'lodash';
import moment from 'moment';

const TicketSchema = Schema({
  _id: String,
  userId: Schema.Types.ObjectId,
  busId: Number,
  cityId: Schema.Types.ObjectId,
  created: {
    type: Date,
    default: new Date()
  }
});

TicketSchema.pre('save', function(next) {
  const today = moment().startOf('day');
  const tomorrow = today.clone().add(1, 'day');
  this.constructor.find({
    busId: this.busId,
    cityId: this.cityId,
    created: {
      $gte: today,
      $lt: tomorrow
    }
  })
    .then(tickets => {
      var ids = _.map(tickets, ticket => ticket._id);

      let newId = generateId();

      while (_.indexOf(ids, newId) > 0) {
        newId = generateId();
      }

      this._id = newId;

      next();
    });
});

function generateId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export default mongoose.model('Ticket', TicketSchema);
