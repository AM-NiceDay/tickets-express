import mongoose, { Schema } from 'mongoose';

const CitySchema = Schema({
  name: String
});

export default mongoose.model('City', CitySchema);
