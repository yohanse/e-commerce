import styled from "styled-components";
import { CiHeadphones } from "react-icons/ci";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled(CiHeadphones)`
  border-radius: 50%;
  border: solid 0.4em grey;
  padding: 0.5em;
  color: white;
  background-color: black;
  margin-bottom: 1em;
`;

const P1 = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
`;

const P2 = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
export const HomeAboutCard = () => {
  return (
    <Wrapper>
      <Icon size = {20}></Icon>
      <P1>FREE AND FAST DELIVERY</P1>
      <P2>Free delivery for all orders over $140</P2>
    </Wrapper>
  );
};
