import {Address} from './Address'
import {User} from './User'

export interface Condominio{
    endereco: Address,
    nome: string,
    qtdApt: number
    sindico: User,
    tipo : Tipo
}

export enum Tipo{
    Comercial = 'Comercial',
    Residencial = 'Residêncial'
}