import mongoose from 'mongoose';
import '../env/env';

const GrupoSchema = new mongoose.Schema({

    descricao: {type: String, required: true},
    titulo: {type: String, required: true},
    users:{type: Array, required: false},
    Condominium:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Condominium',
        required: true,
        unique: true
    }

}, { timestamps: true });



export default mongoose.model('Grupo', GrupoSchema);