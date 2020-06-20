import {Address} from './Address';

export interface User {
    nome: string,
    cpf: string,
    endereco?: Address,
    perfil?: Array<Perfil>,
    senha?: string,
    grupo?: string
    codigo?:string
}


export enum Perfil{
    Sindico = 'Sindico',
    Administrador = 'Administrador',
    Cotista = 'Cotista',
    Morador = 'Morador'
}
