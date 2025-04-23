import { styled } from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export const RegCircleIcon = FaRegCircle as React.ElementType;
export const RegCheckCircleIcon = FaRegCheckCircle as React.ElementType;

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconButton({ isChecked, onCheck }: Props) {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
      {isChecked ? <RegCheckCircleIcon /> : <RegCircleIcon />}
    </CheckIconButtonStyle>
  );
}

const CheckIconButtonStyle = styled.button`
    background: none;
    border : 0;
    cursor: pointer;

    svg {
        width: 24px;
        height : 24px;
    }
`;

export default CheckIconButton;
