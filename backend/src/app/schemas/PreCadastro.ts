import mongoose from 'mongoose';
import '../env/env';
const PreCadastroSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    cpf: {type: String, required: true, unique:true},
    codigo:{type: String, required: true, unique:true},
    url:{type: String}

}, { timestamps: true });

PreCadastroSchema.pre("save", function(next){
    var preCadastro:any = this;
    preCadastro.url = `http://${process.env.PRE_CADASTRO_PATH}:${process.env.PRE_CADASTRO_PORT}/${preCadastro.codigo}`;
    next();
});

export default mongoose.model('PreCadastro', PreCadastroSchema);