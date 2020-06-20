import mongoose from 'mongoose';
import '../env/env';
const PreCadastroSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    cpf: {type: String, required: true, unique:true},
    codigo:{type: String, required: true, unique:true},
    url:{type: String},
    grupo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Grupo',
        required: true
    },


}, { timestamps: true });

PreCadastroSchema.pre("save", function(next){
    var preCadastro:any = this;

    if(!preCadastro.isModified('codigo')) return next();

    preCadastro.url = `user/${preCadastro.codigo}`;
    next();
});

export default mongoose.model('PreCadastro', PreCadastroSchema);