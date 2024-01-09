import { IconType } from "react-icons";
import styled from "styled-components";

interface Props {
  Icon: IconType;
  note: string;
  onClick: () => void;
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const Note = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: white;
`;

const IconWithNote = ({ Icon, note, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon size={23} color="white"></Icon>
      <Note>{note}</Note>
    </Wrapper>
  );
};

export default IconWithNote;
