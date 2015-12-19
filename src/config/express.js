import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

export default function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors());
}