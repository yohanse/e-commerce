import styled from "styled-components";
import Header from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { WishWishList } from "./WishWishList";
import { WishListJustForYou } from "./WishListJustForYou";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 2% 0 2%;
  gap: 7em;
`;



const WishListPage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <RestWrapper>
        <WishWishList></WishWishList>
        <WishListJustForYou></WishListJustForYou>
      </RestWrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};

export default WishListPage;
