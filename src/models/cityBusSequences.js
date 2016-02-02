import mongoose, { Schema } from 'mongoose';

const CityBusSequencesSchema = Schema({
  cityId: Number,
  seq: {
    type: Number
  }
});

export default mongoose.model('CityBusSequences', CityBusSequencesSchema);
