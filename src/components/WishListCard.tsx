import { useState } from "react";
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
  overflow: hidden;
`;

const AddCart = styled.button<{$hover: boolean}>`
  position: absolute;
  background-color: black;
  color: white;
  width: 100%;
  top: ${(props) => props.$hover? "100%": "80%"};
  padding: 0.5em 0 0.5em 0;
  animation: ${(props) => !props.$hover? "top-to-bottom 1s ease-in forwards": "bottom-to-top 1s ease-in forwards"};
  text-align: center;
  outline: none;
  border: none;
  border-radius: 1em;
  

  @keyframes bottom-to-top{
    100%{
      transform: translateY(-100%);
    }
  }

  @keyframes top-to-bottom{
    100%{
      transform: translateY(100%);
    }
  }
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
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => {setHover(true)
      console.log("yohsnse")}}
      onMouseLeave={() => setHover(false)}
    >
      <ImageCard>
        <RemoveIcon></RemoveIcon>
        <AddCart $hover={hover}>
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
