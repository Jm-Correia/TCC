import { User } from "./User";
import { Condominio } from "./Condominium";

export interface Grupo{
    _id?: number,
    descricao: String,
    titulo: String,
    users: Array<User>,
    condominio?: Condominio
}
