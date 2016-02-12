import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import slow from 'connect-slow';

export default function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors({
    origin: 'http://localhost:8080'
  }));
  app.use(slow());
}