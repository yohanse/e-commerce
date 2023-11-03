import styled from "styled-components";
import { WishListCard } from "./WishListCard";
import { Title } from "./Title";
import { WishListJustForYouCard } from "./WishListJustForYouCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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

export const WishListJustForYou = () => {
  return (
    <Wrapper>
      <Header>
        <Title title={"Just For You"}></Title>
        <Button>See All</Button>
      </Header>
      <WishWrapper>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
        <WishListJustForYouCard></WishListJustForYouCard>
      </WishWrapper>
    </Wrapper>
  );
};
