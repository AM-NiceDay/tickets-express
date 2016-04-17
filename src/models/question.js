import mongoose, { Schema } from 'mongoose';

const QuestionSchema = Schema({
  type: String,
  text: String,
  reaction: String
});

export default mongoose.model('Question', QuestionSchema);
