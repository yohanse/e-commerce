import { styled } from "styled-components";

const P = styled.p`
  color: #db4444;
  border-left: #db4444 solid 6px;
  padding: 4px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

interface Props {
  title: String;
}

export const Title = ({ title }: Props) => {
  return <P>{title}</P>;
};
