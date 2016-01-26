import mongoose, { Schema } from 'mongoose';

const CityBusSequencesSchema = Schema({
  cityId: Schema.Types.ObjectId,
  seq: {
    type: Number,
    default: 1000
  }
});

CityBusSequencesSchema.statics.getSeqAndIncrement = function(cityId) {
  return this.findOne({ cityId: cityId})
    .then(cityBusSequence => {
      if (!cityBusSequence) {
        return this.create({
          cityId: cityId
        });
      }

      return cityBusSequence;
    })
    .then(cityBusSequence => {
      const seq = cityBusSequence.seq;

      return cityBusSequence.update({ $inc: { seq: 1 } })
        .then(() => {
          return seq;
        });
    });
};

export default mongoose.model('CityBusSequences', CityBusSequencesSchema);
