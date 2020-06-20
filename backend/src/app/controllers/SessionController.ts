import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import UserSchema from '../schemas/User';
import '../env/env';
import bcrypt from 'bcryptjs';

class SessionController {
    async store(req: Request, res: Response): Promise<Response>{
        let {login, senha} = req.body;

        let user = await UserSchema.findOne({
            cpf: login
        })

        if(!user){
         return res.status(404).json({code: 404, message: 'User Not Found'})
        }

        if(!await bcrypt.compare(senha, user.senha)){
            return res.status(401).json({code: 401, message: 'Login ou Senha Invalid'})
        }

        let {_id, nome}:any = user;
        return res.json({
            user:{
               nome,
            },
            token: jwt.sign({_id}, `${process.env.APP_SECRET}`, {
                expiresIn: `${process.env.APP_TOKEN_TIME}`
            })
        });
    }

    
}

export default new SessionController();