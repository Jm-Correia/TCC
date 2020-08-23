import styled , {css} from 'styled-components';
import {shade} from 'polished'


interface FormProps{
    hasError?: boolean;
    hasStatus?: boolean;
}

export const Title = styled.header`
    
    line-height: 56px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: #33368d;

    img{
        max-width: 150px;
        max-height: 150px;
        width: 100%;
        height: 100%;
    }

    h1 {
        margin-left: 30px;
        font-size: 30px;
        color: #fff;
        font-weight: 800;
    }



`;

export const Container = styled.div`
   
    background: #fff;
    margin-top:3px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    button{
            margin-top: 5px;
            width: 150px;
            background: #04D361;
            color: #fff;
            border: 0;
            border-radius: 10px;
            height: 30px;
            font-weight: bold;
            &:hover {
            background: ${shade(0.2, '#04D361')}
            }
        }
    
    span{
        display: flex;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        border: 1px solid #A8A8B3;
        width: 150px;
        border-radius: 8px;
        color: #c53030;

        svg{
            
            & + svg {
                margin-left:30px;
            }
        }
    }
   
`;


export const Meeting = styled.div`
    margin-top: 10px;
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
       
        div{
            margin-left: 10px;
            flex: 1;

            strong {
                font-size: 18px;
                color: #3D3D4D;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }

            svg{
                margin-left: auto;
                color: #C9C9D4;
            }
        }
    
`;

