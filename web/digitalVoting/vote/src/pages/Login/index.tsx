import React, { FormEvent, useState } from 'react';

import logo from '../../assets/logo.png'
import {Header, Form, Error, Footer} from './styles'


const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [inputError, setInputError] = useState('');
    
    async function handleLogin(event: FormEvent<HTMLFormElement>):Promise<void>{
        event.preventDefault();
        
        try{
            const isPreenchido = (login) || (senha);
            
            if(!isPreenchido){
                setInputError('Necessário Preencher login e senha.')
                return;
            }
            

            setInputError('');
        }catch(err){
            setInputError('ALGUM ERRO AQUi')
        }
    }
    return (
        <>
            <Header>
                <label >Digital Voting </label>
            </Header>
           <Form onSubmit={handleLogin} hasError={Boolean(inputError)}>
               
                   <header>
                       <img src={logo} alt="Digital Vote"/>
                       <label>Digital Voting</label>
                   </header>
                   
                   <div>
                        <input value={login} onChange={(e)=>setLogin(e.target.value)}
                         placeholder="Digite seu login"></input>
                        <input value={senha} onChange={(e)=>setSenha(e.target.value)}
                        placeholder="Digite sua Senha" type="password"></input>
                        {inputError && <Error>{inputError}</Error>}
                       <button type='submit'>Entrar</button>
                       <a href="/dashboard">
                            Cadastra-se
                       </a>
                   </div>
                                
           </Form>
           <Footer> </Footer>
        </>    
    )
}

export default Login;