import {styled} from "styled-components"
import { ColorKey, HeadingSize } from "../../style/theme";

interface Props {
    children : React.ReactNode;
    size : HeadingSize;
    color? : ColorKey;
}

function Title({children, size, color}:Props){
    return (
        <TitleStyle size={size} color = {color}>
            {children}
        </TitleStyle>
    )
}

// Props 타입에서 children 속성은 제외 
const TitleStyle = styled.h1<Omit<Props,"children">>`
    font-size: ${({theme, size})=> theme.heading[size].fontSize};
    color: ${({theme, color})=>(color ? theme.color[color] : theme.color.primary)};
`;

export default Title;