import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 2em 0 2em;
  display: flex;
  flex-direction: column;
  gap: 4em;
  background-color: black;
  margin-top: 4em;
`;

const P = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: grey;
text-align: center;

margin-block-start: 0;
margin-block-end: 0;

`;

export const Footer = () => {
  return <Wrapper>
    <P>&copy; Copyright Rimel 2022. All right reserved</P>
  </Wrapper>;
};
