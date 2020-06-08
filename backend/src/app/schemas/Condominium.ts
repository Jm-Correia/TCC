import mongoose from 'mongoose';

const CondominiumSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    tipo: {type: Object, required: true},
    qtdApt : {type: Number},
    endereco: { type: Object},
    sindico:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }

}, { timestamps: true });

export default mongoose.model('Condominium', CondominiumSchema);