import mongoose, {Schema} from 'mongoose';

let userSchema = new Schema({
  name: String,
  phoneNumber: String,
  password: String,
  email: String,
  cityId: Schema.Types.ObjectId
});

export default mongoose.model('User', userSchema);
