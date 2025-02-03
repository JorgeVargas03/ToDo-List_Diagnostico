import mongoose from "mongoose";

const ListDoSchema = new mongoose.Schema({
    ID: { type: Number },
    CONTENIDO: { type: String },
    ESTADO: { type: Boolean },
    ENCARGADO: {type: String},
    FECHA: {type: Date},
}, {strict: false});

export default mongoose.model('To-Do-List', ListDoSchema);