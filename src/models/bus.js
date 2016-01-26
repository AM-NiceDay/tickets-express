import mongoose, { Schema } from 'mongoose';

const BusSchema = Schema({
  _id: Number,
  route: Number,
  routeName: String,
  cityId: Schema.Types.ObjectId
});

export default mongoose.model('Bus', BusSchema);
