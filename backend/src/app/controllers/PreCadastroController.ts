import {Request, Response} from 'express';
import PreCadastroSchema from '../schemas/PreCadastro'
import { Perfil } from '../model/User';

class PreCadastroController{
    async index(req: Request, res:Response):Promise<Response>{

        let id:string = req.params.id
        console.log(id)
        let preCadastro = await PreCadastroSchema.findOne({
            codigo: id
        })

        if(!preCadastro){
            return res.status(404).json({error:404, message: "Código Invalido"})
        }
        let {nome, cpf, grupo, codigo}:any = preCadastro
        return res.json({
            nome, cpf, grupo,codigo, perfil: Perfil.Morador
        });
    }
}

export default new PreCadastroController();