import {Request, Response} from 'express';
import { Condominio } from '../model/Condominium';
import Condominium from '../schemas/Condominium';

class CondominiumController {
    async neighbor(Request:Request, Response:Response): Promise<Response>{
        throw new Error("Method not implemented.");
    }

    async create(Request:Request, Response:Response): Promise<Response>{
        let condominio: Condominio = Request.body;

        let userId = Request.userId;

       let condominium = await Condominium.create({
            nome: condominio.nome,
            tipo: condominio.tipo,
            qtdApt: condominio.qtdApt,
            endereco: condominio.endereco,
            sindico: userId
        })

        return Response.json(condominium);
    }
}

export default new CondominiumController();
