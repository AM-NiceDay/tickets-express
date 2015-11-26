export default function (mongoose, config) {
  mongoose.Promise = Promise;
  return mongoose.connect(config.mongodbURL);
}