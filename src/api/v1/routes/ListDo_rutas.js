import { Router } from 'express';
import * as ListDoController from "../controllers/ListDo_controller.js";

const router = Router();

router.get('/get', ListDoController.get);
router.get('/Resumen', ListDoController.ResumenTareas);
router.get('/get/:id', ListDoController.getItem);
router.post('/insert', ListDoController.insertItem);
router.put('/update/:id', ListDoController.updateItem);
router.delete('/delete/:id', ListDoController.deleteItem);

export default router;
