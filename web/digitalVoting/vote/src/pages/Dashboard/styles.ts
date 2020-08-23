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
        width: 150px;
        height: 150px;
    }

    h1 {
        margin-left: 45px;
        font-size: 30px;
        color: #fff;
        font-weight: 800;
    }



`;

export const Form = styled.form<FormProps>`
  
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        ${(props)=> props.hasError && css`
            border: 2px solid #c53030;
        `}
        
        &::placeholder{
            color: #A8A8B3;
        }

    }

    button{
        margin-left: 5px;
        width: 150px;
        height: 70px;
        background: #04D361;
        color: white;
        border-radius: 0 5px 5px 0;
        border: 0;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#04D361')}
        }
    }

`;

export const Container = styled.div`
   
   
    
    background: #fff;
    margin-top:3px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    
    header{
        margin-left: 15px;
        flex: 1;
        strong{
                
                font-size: 18px;
                color: #3d3d4d;
            }
            p{
                font-size: 12px;
                color: #737380;
                margin-top: 4px;
            }
            
            
        }
        a{
            
            svg{
              margin-left: auto;
              color: #C9C9D4;
            }
        }
`;

export const Action = styled.div`
     margin-top:0;
     background: #fff;
     
     width: 100%;
     padding: 24px;
     display: flex;
     align-items: center;
     justify-content: center;
     height: 45px;
    
    a{


        & + a{
            margin-left: 15px;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            height: 45px;
            width: 45px;
            border: 2px solid #fff;
            border-radius: 50%;
            background: #2E3192;
           
        }

        svg{
            color: #fff;
        }
    }
`;

export const Meeting = styled.div`
    margin-top: 10px;
    a {
        background: #fff;
        border-radius: 10px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
    
        & + a {
            margin-top: 10px;
        }

        &:hover {
            transform: translate(10px)
        }
    

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

            small{
                margin-left: 20px;
                font-size: 10px;
                font-weight: bold;
                color: #2E3190;
            }

        }
    }
`;

export const Page = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        display: flex;
        list-style: none;

        li{
            

            & + li{
                margin-left: 20px;
            }

            a{
                text-decoration: none;
            }


            strong{
                display: block;
                font-size: 20px;
                color: #3d3d4d;
            }
            span{
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }

    }

`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;

`;