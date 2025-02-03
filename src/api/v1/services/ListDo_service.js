import ListDo from '../models/ListDo';
import boom from '@hapi/boom';

export const get = async () => {
    try {
        const ListDoList = await ListDo.find();
        return ListDoList;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const Total = async () => {
    try {
        const ListDoList = await ListDo.find().countDocuments();
        return ListDoList;
    } catch (error) {
        throw boom.internal(error);
    }
};

export const getItem = async (id, keyType) => {
    let ListDoItem;
    try {
        if (keyType === 'OK') {
            ListDoItem = await ListDo.findOne({
                IdListaOK: id,
            });
        } else if (keyType === 'BK') {
            ListDoItem = await ListDo.findOne({
                IdListaBK: id,
            });
        } else {
            ListDoItem = await ListDo.findOne({
                _id: id,
            });
        }
        return (ListDoItem); //undefined si la llave no es de un tipo válido
    } catch (error) {
        throw boom.internal(error);
    }
};

export const insertItem = async (item) => {
    try {
        const doc = new ListDo(item);
        return await doc.save();
    } catch (error) {
        throw error;
    }
};

export const updateItem = async (id, values) => {
    try {
        return await ListDo.findOneAndUpdate({ _id: id }, values, {
            new: true,
        });
    } catch (error) {
        throw boom.badImplementation(error);
    }
};

export const deleteItem = async (id) => {
    try {
        return await ListDo.findOneAndDelete({ _id: id });
    } catch (error) {
        throw boom.badImplementation(error);
    }
}

// Obtener el total de registros
export const getTotalRegistros = async () => {
    return await ListDo.countDocuments();
};

// Obtener la tarea más reciente (por fecha)
export const getTareaMasReciente = async () => {
    return await ListDo.findOne().sort({ FECHA: -1 }); // Ordena descendente (-1)
};

// Obtener la tarea más antigua (por fecha)
export const getTareaMasAntigua = async () => {
    return await ListDo.findOne().sort({ FECHA: 1 }); // Ordena ascendente (1)
};

// Obtener la cantidad de tareas completadas (ESTADO = true)
export const getTareasCompletadas = async () => {
    return await ListDo.countDocuments({ ESTADO: true });
};

// Obtener la cantidad de tareas pendientes (ESTADO = false)
export const getTareasPendientes = async () => {
    return await ListDo.countDocuments({ ESTADO: false });
};