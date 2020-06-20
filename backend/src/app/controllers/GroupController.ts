import {Request, Response} from 'express';
import { Grupo } from '../model/Grupo';
import {v5 as uuidv5} from 'uuid';
import PreCadastro from '../model/PreCadastro';
import GrupoSchema from '../schemas/Grupo'
import PreCadastroSchema from '../schemas/PreCadastro'

class GroupController{
    async create(req: Request, res:Response):Promise<Response>{

        let {descricao, titulo, users, condominio}:Grupo = req.body;
        let naoPreenchidos = !condominio
        if(naoPreenchidos){
            res.status(400).json({error: 400, message: "Condominio ou fundo não enviados!"})
        }

        let isGrupoCondominio = await GrupoSchema.findOne({
            Condominium: condominio
        })

        if(isGrupoCondominio){
             return res.status(422).json({error:422, message: "Grupo já cadastrado"})
        }

        let grupo = await GrupoSchema.create({
            descricao: descricao,
            titulo: titulo,
            users: [],
            Condominium: condominio
        })


        let preCadastros: Array<PreCadastro> = users.map(u=>{
            return {
                nome: u.nome,
                cpf: u.cpf,
                codigo: uuidv5(u.cpf, uuidv5.URL),
                grupo: grupo._id
            }
        });
        
        let retorno = await PreCadastroSchema.create(preCadastros)
       
        return res.json({
            users: retorno
        });
    }
}

export default new GroupController();