//Se importa la biblioteca Router de express para manejar rutas
import { Router } from 'express';

//Se importa la configuración con los valores del .env
import config from '../../../config/config';

//Se importan las rutas de cada tabla
import ListDoRutas from "./ListDo_rutas.js";

//Se configuran las rutas para las apis
const routerAPI = (app) => {
    const router = Router();
    
    app.use(config.API_URL, router);

    router.use('/ToDoList', ListDoRutas);

    return router;
};

//Se exportan las rutas configuradas para usarse en app.js
module.exports = routerAPI;
