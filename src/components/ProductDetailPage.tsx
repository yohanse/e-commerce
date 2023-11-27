import styled from "styled-components";
import { Footer } from "./Footer";
import Header from "./Header";
import { NavBar } from "./NavBar";
import ProductDetailPicture from "./ProductDetailPicture";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2% 0 2%;
  gap: 2em;
`;

const CartPrice = styled.div`
  display: flex;
  gap: 1em;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  color: grey;
`;

const Strong = styled.strong``;



const ProductDetailPage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <Wrapper>
        <P>
          Account / Gaming /<Strong> Cart</Strong>
        </P>
        <ProductDetailPicture></ProductDetailPicture>
      </Wrapper>
      <Footer></Footer>
    </HomeWrapper>
  )
}

export default ProductDetailPage