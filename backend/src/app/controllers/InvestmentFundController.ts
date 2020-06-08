import {Request, Response} from 'express';
import InvestmentFundSchema from '../schemas/InvestmentFund';
import { InvestmentFund, Modalidade } from '../model/InvestmentFundo';

class InvestmentFundController {

    async create(Request:Request, Response:Response): Promise<Response>{
        let fundo: InvestmentFund = Request.body;

        let userId = Request.userId;

       let investmentFundo = await InvestmentFundSchema.create({
            nome: fundo.nome,
            codigo: fundo.codigo,
            modalidade: fundo.modalidade,
            qtdCotas: fundo.qtdCotas,
            comercial: fundo.comercial,
            diaAssembleia: fundo.diaAssembleia,
            administrador: userId
        })

        return Response.json(investmentFundo);
    }

    async investor(Request:Request, Response:Response): Promise<Response>{
        throw new Error("Method not implemented.");
    }
}

export default new InvestmentFundController();