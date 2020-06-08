import mongoose from 'mongoose';

const InvestmentFundSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    codigo: {type: String, required:true, unique:true},
    modalidade: {type: Object, required: true},
    qtdCotas : {type: Number},
    cvm:{type:String, required: false},
    comercial: { type: Object},
    diaAssembleia: {type: Number},
    administrador:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    }

}, { timestamps: true });

export default mongoose.model('InvestmentFund', InvestmentFundSchema);