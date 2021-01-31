import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        padding: 0;
        margin: 0;

        font-family: "Poppins";

        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

export default GlobalStyles