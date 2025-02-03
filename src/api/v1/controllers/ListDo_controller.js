import * as ListDoServices from '../services/ListDo_service.js';

// Endpoint para obtener todos los datos en una sola petición
export const ResumenTareas = async (req, res) => {
    try {
        const total = await ListDoServices.getTotalRegistros();
        const tareaMasReciente = await ListDoServices.getTareaMasReciente();
        const tareaMasAntigua = await ListDoServices.getTareaMasAntigua();
        const completadas = await ListDoServices.getTareasCompletadas();
        const pendientes = await ListDoServices.getTareasPendientes();

        res.json({
            totalRegistros: total,
            tareaMasReciente,
            tareaMasAntigua,
            completadas,
            pendientes
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};


export const get = async (req, res, next) => {
    try {
        const docs = await ListDoServices.get();
        if (!docs) {
            return res.status(400).json({ message: 'No se encontraron tareas registrados.' });
        } else {
            res.status(200).json(docs);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const Total = async (req, res, next) => {
    try {
        const docs = await ListDoServices.Total;
        if (!docs) {
            return res.status(400).json({ message: 'No se encontraron tareas registrados.' });
        } else {
            res.status(200).json(docs);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const keyType = req.query.keyType;
        const doc = await ListDoServices.getItem(id, keyType);
        if (!doc) {
            return res.status(400).json({ message: 'No se encontró el item' });
        } else {
            res.status(200).json(doc);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

//POST
export const insertItem = async (req, res, next) => {
    try {
        const item = req.body;
        const doc = await ListDoServices.insertItem(item);
        if (!doc) {
            return res.status(400).json({ message: 'No se pudo crear la tarea' });
        } else {
            res.status(201).json(doc);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

//PUT
export const updateItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const values = req.body;
        const doc = await ListDoServices.updateItem(id, values);
        if (!doc) {
            return res.status(400).json({ message: 'No se pudo actualizar la tarea.' });
        } else {
            res.status(200).json(doc);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const deleteItem = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doc = await ListDoServices.deleteItem(id);
        if (!doc) {
            return res.status(400).json({ message: 'No se pudo eliminar la tarea.' });
        } else {
            res.status(200).json(doc);
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
}
