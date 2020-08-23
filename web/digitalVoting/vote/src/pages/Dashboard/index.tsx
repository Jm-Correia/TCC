import React from 'react';
import {FaPlus,FaSearch,FaUsers, FaUserCircle, FaPen,FaPlay} from 'react-icons/fa';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';


import {Title, Form, Error, Container, Action, Meeting, Page} from './styles'


const Dashboard: React.FC = () => {
    return (
        <>
        <Title>
           <img src={logo} alt="Digital Vote"/>
           <h1>Dashboard</h1>
        </Title>
        <Container>
                <FaUserCircle size={35}/>
            <header>
                <strong>João Marcos Correia</strong>
                <p> Testando descrição do perfil do usuário </p>
            </header>
               <a href="">
                <FaPen size={15}/>
               </a>

        </Container>
        
        <Action>
            <a href="" title="Nova Assembleia">
                <span>
                    <FaPlus size={25}/>
                </span>
            </a>
            
            <a href="" title="Pesquisar Assembleia">
                <span>
                    <FaSearch size={25}/>
                </span>
            </a>
            <a href="" title="Novo Usuário">
                <span>
                    <FaUsers size={25}/>
                </span>
            </a>
            <a href="/vote" title="Iniciar Assembleia">
                <span>
                    <FaPlay size={20}/>
                </span>
            </a>
                    
        </Action>
        <Meeting>
        
            <Link key='1' to={`/vote`}>
                
                <div >
                    <strong>Assembleia de Teste 1</strong><small>Aguardando</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            <Link key='1' to={`/vote`}>
                
                <div >
                    <strong>Titulo da Assembleia 22</strong><small>Finalizado</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
               
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            <Link key='1' to={`/vote`} >
                
                <div >
                    <strong>Titulo da Assembleia 31</strong><small>Finalizado</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
               
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            <Link key='1' to={`/vote`} >
                
                <div >
                    <strong>Titulo da Assembleia 31</strong><small>Finalizado</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
               
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            <Link key='1' to={`/vote`} >
                
                <div >
                    <strong>Titulo da Assembleia 31</strong><small>Finalizado</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
               
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            <Link key='1' to={`/vote`} >
                
                <div >
                    <strong>Titulo da Assembleia 31</strong><small>Finalizado</small>
                    <p>Aqui vou adicionar um ressumo breve do que acontecerá na assembleia</p>
               
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
            
        </Meeting>

        </>

    )
}

export default Dashboard;