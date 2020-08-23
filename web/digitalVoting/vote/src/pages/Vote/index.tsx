import React from 'react';
import {AiOutlineLike,AiOutlineDislike, AiTwotoneLike,AiFillDislike} from 'react-icons/ai';

import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png';


import {Title, Container, Meeting} from './styles'


const Vote: React.FC = () => {
    return (
        <>
        <Title>
           <img src={logo} alt="Digital Vote"/>
           <h1>Dia da Votação</h1>
        </Title>
        <Container>
           <button>Confirmar</button>
           <span>00:14:48</span>
        </Container>
        
       
        <Meeting>
            <div >
                <strong>Cortar os gastos na area da piscina</strong>
                <p>Texto da pauta</p>
            </div>
            <span>
            <a href="/vote"><AiTwotoneLike size={30}/></a>
                <a href="/vote"><AiOutlineDislike size={30}/></a>
            </span>
        </Meeting>
        <Meeting>
            <div >
                <strong>Aumentar o gramado do mini futebol </strong>
                <p>Texto da pauta Aqui</p>
            </div>
            <span>
            <a href="/vote"><AiOutlineLike size={30}/></a>
                <a href="/vote"><AiOutlineDislike size={30}/></a>
            </span>
        </Meeting>
        <Meeting>
            <div >
                <strong>Reorganizar garagem por ordem de chegada</strong>
                <p>Texto da pauta teste</p>
            </div>
            <span>
            <a href="/vote"><AiOutlineLike size={30}/></a>
                <a href="/vote"><AiFillDislike size={30}/></a>
            </span>
        </Meeting>
        </>

    )
}

export default Vote;