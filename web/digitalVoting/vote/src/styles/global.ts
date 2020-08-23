import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    body{
        background: #E5E5E5;
        -webkit-font-smoothing: antialiased; 
    }

    body, input, button {
        font: 16px 'Roboto', sans-serif;
    }

    #root{
        max-width: 960px;
        max-height: 600px;
        margin: 0 auto;
        padding: 10px 0px;
    }

    button{
        cursor: pointer;
    }
`;