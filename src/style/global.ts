import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
    // 테마에 따라 기본 스타일 변경
    themeName : ThemeName; //테마는 light와 dark로 제한 
}

export const GlobalStyle = createGlobalStyle<Props>`
    body {
        padding : 0;
        margin : 0;
        background-color :  ${(props)=> (props.themeName === 'light'?'white':'black')}
    }

    h1{
        margin : 0;
    }
    
    *{
        color : ${(props)=> (props.themeName === 'light'?'black':'white')}
    }
`