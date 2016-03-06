import mongoose, { Schema } from 'mongoose';

let userSchema = new Schema({
  phoneNumber: String,
  name: String,
  lastName: String,
  password: String,
  role: String
});

export default mongoose.model('User', userSchema);
