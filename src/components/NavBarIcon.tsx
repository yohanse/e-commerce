import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

const InputWrapper = styled.div`
  display: flex;
  background: #f5f5f5;
`;

const Input = styled.input`
  border: none;
  background: #f5f5f5;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  padding: 2px 5px;
  width: 14em;
  &:focus {
    outline: none;
  }
`;

const WishIcon = styled(AiOutlineHeart)`
  cursor: pointer;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  cursor: pointer;
`;

export const NavBarIcon = () => {
  const navigation = useNavigate();
  return (
    <Wrapper>
      <InputWrapper>
        <Input type="search" placeholder="what are you looking for?"></Input>
        <AiOutlineSearch></AiOutlineSearch>
      </InputWrapper>
      <WishIcon
        onClick={() => {
          navigation("/wishList");
        }}
      />
      <CartIcon
        onClick={() => {
          navigation("/cart");
        }}
      />
    </Wrapper>
  );
};
