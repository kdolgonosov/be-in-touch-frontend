import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    a {
        text-decoration: none;
    }
    #root{
        margin:0 auto;
        background-color: #141414;
        min-height: 100vh;
    }
    
`;
