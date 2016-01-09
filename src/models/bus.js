import mongoose, { Schema } from 'mongoose';

const BusSchema = Schema({
  route: Number,
  routeName: String
});

export default mongoose.model('Bus', BusSchema);
