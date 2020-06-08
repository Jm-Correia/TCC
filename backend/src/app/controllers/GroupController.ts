import {Request, Response} from 'express';
import { Grupo } from '../model/Grupo';
import {v5 as uuidv5} from 'uuid';
import { PreCadastro } from '../model/User';

class GroupController{
    async create(req: Request, res:Response):Promise<Response>{

        let {descricao, titulo, users}:Grupo = req.body;

        let preCadastros: Array<PreCadastro> = users.map(u=>{
            return {
                nome: u.nome,
                cpf: u.cpf,
                codigo: uuidv5(u.cpf, uuidv5.URL)
            }
        });

        /**
         * Inserir no mondoDB o precadastro, criar os usuarios associar ao grupo.
         * e retornar 
         */

        return res.json({
            preCadastros
        });
    }
}

export default new GroupController();