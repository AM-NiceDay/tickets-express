import mongoose, { Schema } from 'mongoose';

const BusSchema = Schema({
  _id: {
    type: Number,
    unique: false
  },
  route: Number,
  routeName: String,
  cityId: Number
});

export default mongoose.model('Bus', BusSchema);
