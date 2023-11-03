import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ImageCard = styled.div`
  height: 11em;
  width: 11em;
  background-size: cover;
  position: relative;
  background-image: url("https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg");
  border-radius: 1em;
`;

const AddCart = styled.button`
  position: absolute;
  background-color: black;
  color: white;
  width: 100%;
  padding: 0.5em 0 0.5em 0;
  bottom: 0;
  text-align: center;
  outline: none;

  border: none;
  border-radius: 1em;
`;

const Name = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const Price = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #db4444;
  margin-right: 1em;
`;

const PricePrev = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: relative;
  &::before {
    position: absolute;
    background-color: grey;
    content: "";
    height: 2px;
    width: 100%;
    top: 50%;
  }
`;

const RemoveIcon = styled(BsTrash)`
size: 18;
  position: absolute;
  border-radius: 50%;
  padding: 0.3em;
  background-color: white;
  color: black;
  top: 5%;
  right: 5%;
`;
export const WishListCard = () => {
  return (
    <Wrapper>
      <ImageCard>
        <RemoveIcon></RemoveIcon>
        <AddCart>
          <AiOutlineShoppingCart size={15} /> Add to cart
        </AddCart>
      </ImageCard>
      <Name>Iphone mobile</Name>
      <PriceWrapper>
        <Price>$460</Price>
        <PricePrev>$590</PricePrev>
      </PriceWrapper>
    </Wrapper>
  );
};
