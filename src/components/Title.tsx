import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Bar = styled.div`
  width: 1em;
  background-color: #db4444;
  border-radius: 4px;
`;
const P = styled.p`
  color: #db4444;
  padding: 4px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

interface Props {
  title: String;
}

export const Title = ({ title }: Props) => {
  return (
    <Wrapper>
      <Bar></Bar>
      <P>{title}</P>
    </Wrapper>
  );
};
