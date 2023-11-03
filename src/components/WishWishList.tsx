import styled from "styled-components";
import { WishListCard } from "./WishListCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`;

const Button = styled.button`
  text-align: center;
  padding: 0.2em 1em 0.2em 1em;
  outline: none;
  border: 1px solid grey;
  background-color: white;
`;

const WishWrapper = styled.div`
  display: flex;
  gap: 1em;
  overflow: scroll;
`;

export const WishWishList = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Wishlist</Title>
        <Button>Move All To Bag</Button>
      </Header>
      <WishWrapper>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
        <WishListCard></WishListCard>
      </WishWrapper>
    </Wrapper>
  );
};
