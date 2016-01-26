import mongoose, { Schema } from 'mongoose';

const BusSchema = Schema({
  _id: {
    type: Number,
    unique: false
  },
  route: Number,
  routeName: String,
  cityId: Schema.Types.ObjectId
});

export default mongoose.model('Bus', BusSchema);
