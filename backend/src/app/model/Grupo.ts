import { User } from "./User";
import { Condominio } from "./Condominium";
import { InvestmentFund } from "./InvestmentFundo";

export interface Grupo{
    descricao: String,
    titulo: String,
    users: Array<User>,
    condominio?: Condominio,
    investmentFund?:InvestmentFund
}
