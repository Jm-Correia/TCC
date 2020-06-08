import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({

    nome: {type: String, required: true},
    cpf: {type: String, required: true, unique:true},
    endereco: {type: Object, required: false},
    perfil: {type: Array, required: false},
    senha: {type: String, required: false}

}, { timestamps: true });

UserSchema.pre("save", function(next) {
    var user:any = this;

    if(!user.isModified('senha')) return next();
    
    bcrypt.hash(user.get('senha'), 8, function(err, hash){
        if(err) return next(err);
        user.senha = hash;
        next();
    })
});



export default mongoose.model('User', UserSchema);