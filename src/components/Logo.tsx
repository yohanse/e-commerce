import styled from "styled-components";

const P = styled.p`
  cursor: pointer;
  color: #000000;
  line-height: 1.6em;
  font-weight: 700;
  font-size: 1.6em;
  margin-block-start: 0;
  margin-block-end: 0;
  @media (min-width: 669px) {
    display: none;
  }
`;

export const Logo = () => {
  return <P>Exclusive</P>;
};
