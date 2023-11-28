import styled from "styled-components";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";

import { IoPersonOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IconWithNote from "./IconWithNote";

const Wrapper = styled.div`
  display: flex;
  align-items: strech;
  position: relative;
  justify-content: center;
  gap: 0.9em;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
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
  width: 15em;
  &:focus {
    outline: none;
  }
`;

const WishIcon = styled(AiOutlineHeart)`
  cursor: pointer;
  padding: 3px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  padding: 3px;
`;

const User = styled(IoPersonOutline)`
  cursor: pointer;
  border-radius: 50%;
  background-color: #db4444;
  color: #ffffff;
  padding: 3px;
  position: relative;
`;

const UserMenu = styled.div<{ $account: boolean }>`
  position: absolute;
  top: 34px;
  right: 0;
  display: ${(props) => (props.$account ? "flex" : "none")};
  flex-direction: column;
  align-items: start;
  background-color: rgba(56, 47, 57, 0.9);
  border-radius: 6px;
  padding: 15px 10px;
  gap: 8px;
`;

export const NavBarIcon = () => {
  const navigation = useNavigate();
  const [account, setAccount] = useState(false);
  return (
    <Wrapper>
      <InputWrapper>
        <Input type="search" placeholder="what are you looking for?"></Input>
        <AiOutlineSearch size={20} className="strokWidth"></AiOutlineSearch>
      </InputWrapper>
      <WishIcon
        size={25}
        className="strokWidth"
        onClick={() => {
          navigation("/wishList");
        }}
      />
      <CartIcon
        size={25}
        className="strokWidth"
        onClick={() => {
          navigation("/cart");
        }}
      />
      <User
        size={25}
        className="strokWidth"
        onClick={() => setAccount(!account)}
      ></User>
      <UserMenu $account={account}>
        <IconWithNote
          note="Manage My Account"
          Icon={IoPersonOutline}
        ></IconWithNote>
        <IconWithNote note="My Order" Icon={LuShoppingBag}></IconWithNote>
        <IconWithNote
          note="My Cancellations"
          Icon={MdOutlineCancel}
        ></IconWithNote>
        <IconWithNote note="My Reviews" Icon={CiStar}></IconWithNote>
        <IconWithNote note="Logout" Icon={CiLogout}></IconWithNote>
      </UserMenu>
    </Wrapper>
  );
};
