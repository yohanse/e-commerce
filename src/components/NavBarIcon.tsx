import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

const InputWrapper = styled.div`
    display: flex;
    border: 1px grey solid;
`;

const Input = styled.input`
    border: none;
    &:focus{
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
        <Input type="search"></Input>
        <AiOutlineSearch></AiOutlineSearch>
      </InputWrapper>
      <WishIcon onClick = {
        () => {
          navigation('/wishList');
        }
      }/>
      <CartIcon onClick = {
        () => {
          navigation('/cart');
        }
      }/>
    </Wrapper>
  );
};
