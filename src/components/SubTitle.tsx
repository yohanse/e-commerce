import { styled } from "styled-components";

const P = styled.p`
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.04em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

interface Props{
    subTitle: string;
}

export const SubTitle = ({subTitle}: Props) => {
  return (
    <P>{subTitle}</P>
  )
}
