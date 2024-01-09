import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { styled } from "styled-components";
import { Product } from "../store/features/product-slice";
import { useAppDispatch } from "../store/store";
import { postCartItem } from "../store/features/cart-slice";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: left;
`;

const Price = styled.p`
  //styleName: Heading/24PX Regular;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.03em;
  text-align: left;
`;

const Note = styled.p`
  //styleName: Title/14PX Regular;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

const Hr = styled.hr`
  width: 100%;
  height: 0.4px;
`;

const Parnt = styled.p`
  color: grey;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

const Pgreen = styled.p`
  border-left: 1px solid grey;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00ff66;
`;

const HFlex1 = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
`;

const StarWrapper = styled.div`
  display: flex;
`;

const Tag = styled.p`
  //styleName: Heading/20PX Regular;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.03em;
  text-align: left;
  margin-right: 5px;
`;

const UNSelectedCircleColor = styled.div<{ $color: string }>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

const SelectedCircleColor = styled.div<{ $color: string }>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  padding: 3px;
`;

const SelectedSize = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  background-color: #db4444;
  height: 1.5em;
  width: 1.5em;
  border: 1px solid #db4444;
  border-radius: 4px;
`;

const UnSelectedSize = styled.div`
  height: 1.5em;
  width: 1.5em;
  border: 1px solid grey;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  border-radius: 4px;
`;

const HFlex2 = styled.div`
  display: flex;
  justify-content: start;
  gap: 1em;
`;

const HFlex3 = styled.div`
  display: flex;
`;

const P1 = styled.p`
box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  border: solid 1px grey;
  border-right: 0;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:hover {
    background-color: #db4444;
    color: white;
    border: none;
    
  }
`;

const P3 = styled.p`
box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  border: solid 1px grey;
  border-left: 0;
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  &:hover {
    background-color: #db4444;
    color: white;
    border: none;
  }
`;

const P2 = styled.p`
box-sizing: border-box;
  height: 1.5em;
  width: 3em;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  border: solid 1px grey;
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: #db4444;
  padding: 0 1.2em 0 1.2em;
  border-radius: 4px;
`;

const Love = styled(AiOutlineHeart)<{ $love: boolean }>`
  border: ${(props) => (props.$love ? "" : "1px solid grey")};
  background-color: ${(props) => (props.$love ? "#db4444" : "")};
  color: ${(props) => (props.$love ? "white" : "")};
  padding: 2px;
  border-radius: 4px;
`;

interface Props {
  product: Product
}

const ProductDetailNote = ({ product }: Props) => {
  const [ quantity, setQuantity ] = useState(1);
  const dispatch = useAppDispatch()
  return (
    <Wrapper>
      <Title>{product.title}</Title>
      <HFlex1>
        <StarWrapper>
          <AiFillStar size={18} color={"#FFD700"} />
          <AiFillStar size={18} color={"#FFD700"} />
          <AiFillStar size={18} color={"#FFD700"} />
          <AiFillStar size={18} color={"#FFD700"} />
          <AiFillStar size={18} color={"grey"} />
        </StarWrapper>
        <Parnt>(150 Reviews)</Parnt>
        <Pgreen>In Stock</Pgreen>
      </HFlex1>
      <Price>${product.unit_price}</Price>
      <Note>
        {product.description}
      </Note>
      <Hr></Hr>
      <HFlex1>
        <Tag>Colours:</Tag>
        <UNSelectedCircleColor $color="blue"></UNSelectedCircleColor>
        <SelectedCircleColor $color="red"></SelectedCircleColor>
        <UNSelectedCircleColor $color="orange"></UNSelectedCircleColor>
        <UNSelectedCircleColor $color="blue"></UNSelectedCircleColor>
      </HFlex1>
      <HFlex1>
        <Tag>Size:</Tag>
        <UnSelectedSize>XS</UnSelectedSize>
        <SelectedSize>S</SelectedSize>
        <UnSelectedSize>M</UnSelectedSize>
        <UnSelectedSize>L</UnSelectedSize>
        <UnSelectedSize>XL</UnSelectedSize>
      </HFlex1>
      <HFlex2>
        <HFlex3>
          <P1 onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</P1>
          <P2>{quantity}</P2>
          <P3 onClick={() => setQuantity(quantity + 1)}>+</P3>
        </HFlex3>
        <Button onClick={() => {
          dispatch(postCartItem({product_id: product.id, quantity: quantity}))
        }}>Add to Cart</Button>
        <Love size={27} $love={true}></Love>
      </HFlex2>
    </Wrapper>
  );
};

export default ProductDetailNote;
