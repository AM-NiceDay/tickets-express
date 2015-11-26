import morgan from 'morgan';
import bodyParser from 'body-parser';

export default function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
}