import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './routes/api';
import config from './config';

import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

mongoose.connect(config.mongodbURL);
mongoose.Promise = Promise;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(apiRouter);

app.listen(3000);