import mongoose, { Schema } from 'mongoose';

const CitySchema = Schema({
  _id: Number,
  name: String
});

CitySchema.pre('save', function(next) {
  this.constructor.findOne()
    .sort('-_id')
    .exec()
    .then(lastCity => {
      this._id = lastCity ? lastCity._id + 1 : 1;
      next();
    });
});

export default mongoose.model('City', CitySchema);
