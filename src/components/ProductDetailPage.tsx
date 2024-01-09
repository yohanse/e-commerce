import styled from "styled-components";
import { Footer } from "./Footer";
import Header from "./Header";
import { NavBar } from "./NavBar";
import ProductDetailPicture from "./ProductDetailPicture";
import { useLocation } from "react-router-dom";

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



const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state && location.state.product;
  
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <Wrapper>
        <P>
          Account / Gaming /<Strong> Cart</Strong>
        </P>
        <ProductDetailPicture product={product}></ProductDetailPicture>
      </Wrapper>
      <Footer></Footer>
    </HomeWrapper>
  )
}

export default ProductDetailPage