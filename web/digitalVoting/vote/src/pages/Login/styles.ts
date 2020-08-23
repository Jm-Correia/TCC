import styled, {css} from 'styled-components';
import {shade} from 'polished'

interface FormProps{
    hasError: boolean;
}

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #33368d;
    height: 600px;
    border-radius: 10px;

    label{
        top: 200px;
        position: absolute;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
    }
`;

export const Form = styled.form<FormProps>`
    
    top: 300px;
    position: absolute;
    background: #fff;
    max-width: 960px;
    width: 100%;
    height: 20em;
    border-radius:10px;
    margin: 0 auto;
        
    
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
 
        img{
            width: 120px;
            height: 120px;
        }
 
        label{
            margin-left: 20px;
        }
    }

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 10px;

        input{
            width: 350px;
            border: 1px solid #A8A8B3; 
            border-radius: 5px 0 0 5px;
            padding: 0 24px;
            height: 25px;


            ${(props)=> props.hasError && css`
            border: 2px solid #c53030;
            `}

            &::placeholder{
            color: #A8A8B3;
            }

            &+ input {
                margin-top: 5px;
            }
        }

        button{
            margin-top: 5px;
            width: 350px;
            background: #2E3192;
            color: #fff;
            border: 0;
            border-radius: 10px;
            height: 30px;
            font-weight: bold;
            &:hover {
            background: ${shade(0.2, '#2E3180')}
        }
        }
        a{
            margin-top: 5px;
            font-size: 12px;
        }
        
    }
`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;

`;

export const Footer = styled.div`
    
    background: #33368d;
    height: 10vmax;
    border-radius: 10px;

`;