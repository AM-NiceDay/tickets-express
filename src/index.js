import express from 'express';
import mongoose from 'mongoose';
import config from './config';
import configExpress from './config/express';
import configMongoose from './config/mongoose';
import apiRouter from './routes/api';

const app = express();

configExpress(app);
let connection = configMongoose(mongoose, config).connection;

connection.on('error', console.log);

app.use(apiRouter);

app.listen(3000);