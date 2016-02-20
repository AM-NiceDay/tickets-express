import mongoose, { Schema } from 'mongoose';
import _ from 'lodash';
import moment from 'moment';

const TicketSchema = Schema({
  _id: {
    type: String,
    unique: false
  },
  userId: Schema.Types.ObjectId,
  bus: { type: Number, ref: 'Bus' },
  cityId: Number,
  created: {
    type: Date,
    default: () => new Date()
  }
});

TicketSchema.pre('save', function(next) {
  const now = moment();
  const threeHoursAgo = now.clone().subtract(3, 'hour');
  this.constructor.find({
    bus: this.busId,
    cityId: this.cityId,
    created: {
      $gte: threeHoursAgo,
      $lt: now
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
  var possible = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 4; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export default mongoose.model('Ticket', TicketSchema);
