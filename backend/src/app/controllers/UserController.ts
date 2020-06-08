import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {User, Perfil} from '../model/User';
import UserSchema from '../schemas/User';
import '../env/env';

class UserController{
    async create(req:Request, res:Response): Promise<Response>  {
        const usuario:User = req.body;
        
        let user = await UserSchema.create({
            nome: usuario.nome,
            cpf: usuario.cpf,
            endereco: usuario.endereco,
            perfil: Perfil.Sindico,
            senha: usuario.senha
        });
        
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
    }
}

export default new UserController();