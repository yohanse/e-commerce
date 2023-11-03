import styled from "styled-components";
import { CartGrid } from "./CartGrid";
import { Footer } from "./Footer";
import Header from "./Header";
import { NavBar } from "./NavBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2% 0 2%;
  gap: 2em;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  color: grey;
`;

const Strong = styled.strong``;

export const CartPage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <Wrapper>
        <P>
          Home / <Strong>Cart</Strong>
        </P>
        <CartGrid></CartGrid>
      </Wrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};
