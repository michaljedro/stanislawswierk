import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

    *{
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }
    body {
        background: ${({theme})=> theme.colors.bgc};
        font-family: 'Source Sans Pro', sans-serif;
        color: ${({theme})=>theme.colors.font};
    }
`

export default GlobalStyles