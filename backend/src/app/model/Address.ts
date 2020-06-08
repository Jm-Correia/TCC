export interface Address{
    logradouro: string,
    cep: string,
    bairro: string,
    cidade: string, 
    estado: string,
    complemento?: string,
    numero?: number
}
