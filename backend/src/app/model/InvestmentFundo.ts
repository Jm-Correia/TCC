import {Address} from './Address'
import {User} from './User'

export interface InvestmentFund{
    nome: string,
    codigo: string,
    modalidade?: Modalidade,
    qtdCotas: number,
    cvm?: string,
    comercial: Address,
    diaAssembleia?: number,
    administrador: User
}

export enum Modalidade {
    FIXA = 'FIXA',
    ACAO = 'ACAO',
    CAMBIAL = 'CAMBIAL',
    MULTIMERCADO = 'MULTIMERCADO',
    DIVIDA = 'DIVIDA-EXTERNA',
    REFERENCIADO = 'REFERENCIADO',
    CURTO = 'CURTO-PRAZO',
    IMOBILARIOS = 'IMOBILIARIOS',
    FIC = 'FIC'
}