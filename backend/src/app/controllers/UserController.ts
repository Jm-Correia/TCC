import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {User, Perfil} from '../model/User';
import UserSchema from '../schemas/User';
import PreCadastroSchema from '../schemas/PreCadastro'
import GrupoSchema from '../schemas/Grupo'
import '../env/env';

class UserController{
    async create(req:Request, res:Response): Promise<Response>  {
        const usuario:User = req.body;
        try{
            let user = await UserSchema.create({
                nome: usuario.nome,
                cpf: usuario.cpf,
                endereco: usuario.endereco,
                perfil: Perfil[`${usuario.perfil}`],
                senha: usuario.senha
            });

            if(user && usuario.grupo && usuario.codigo){
                await PreCadastroSchema.findOneAndRemove(
                    {codigo: usuario.codigo}, function(err, offer){
                        if(err) {throw err}
                        console.log(offer)
                    })        
                console.log("ENTREI AQ")    
                await GrupoSchema.findByIdAndUpdate(
                    usuario.grupo,
                    { $push: { users: user._id }},
                    {'new':true})
            }

            let {_id, nome}:any = user;
    
            return res.json({
                user:{
                    _id,
                    nome
                },
                token: jwt.sign({_id}, `${process.env.APP_SECRET}`, {
                    expiresIn: `${process.env.APP_TOKEN_TIME}`
                })
            });
        }catch(err){
            return res.status(500).send();
        }

    }
   
}

export default new UserController();