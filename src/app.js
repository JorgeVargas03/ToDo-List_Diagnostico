import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//FIC: imports Swagger
//FIC: imports Routes
//FIC: imports Middlewares
//FIC: Config para variables de entorno
import config from './config/config';
//FIC: Declaramos la variable app igualandola a express
const app = express();
import { mongoose } from './config/database.config';
//FIC: Settings
app.set('port', config.PORT);
//FIC: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


import routerAPI from './api/v1/routes/index';

routerAPI(app);

export default app;
