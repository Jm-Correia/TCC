import {Address} from './Address';

export interface User {
    nome: string,
    cpf: string,
    endereco?: Address,
    perfil?: Array<Perfil>,
    senha?: string
}

export interface PreCadastro{
    nome: string,
    cpf: string,
    codigo: String
}

export enum Perfil{
    Sindico = 'S',
    Administrador = 'A',
    Cotista = 'C',
    Morador = 'M'
}
