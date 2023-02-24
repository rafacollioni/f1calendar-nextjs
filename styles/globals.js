import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --colorMain: #EE0000;
        --colorAccent: #D23131;
        --backgroundColor: #15151F;
        --backgroundColorLevel2: #222232;
        --backgroundColorLevel3: #2E2E42;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
    body{
        background-color: var(--backgroundColor);
        font-size: 62,5%;
        font-family: 'Poppins', sans-serif;
    }
    section{
        padding: 0 5%;
    }

`;

export default GlobalStyle;
