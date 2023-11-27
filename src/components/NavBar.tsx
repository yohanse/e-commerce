import styled from "styled-components";
import { Logo } from "./Logo";
import { NavBarMiddle } from "./NavBarMiddle";
import { NavBarIcon } from "./NavBarIcon";
import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { LogoFake } from "./LogoFake";

const Nav = styled.nav`
  padding: 0 1em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid grey 1px;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 669px) {
    justify-content: space-between;
  }
`;

const Div = styled.div<{ $opened: boolean }>`
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 669px) {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    gap: 1em;
    padding: 1em;
    border-top: 1px grey solid;
    flex-direction: column-reverse;
    position: absolute;
    top: 100%;
    width: 100vw;
    align-items: center;
    display: ${(props) => (props.$opened ? "flex" : "none")};
  }
`;

const Menu = styled(AiOutlineMenu)`
  margin-right: 1rem;
  @media (min-width: 668px) {
    display: none;
  }
`;

export const NavBar = () => {
  const [opened, setOpened] = useState(true);

  return (
    <Nav>
      <Logo></Logo>
      <Menu onClick={() => setOpened(!opened)}></Menu>
      <Div $opened={opened}>
        <LogoFake></LogoFake>
        <NavBarMiddle></NavBarMiddle>
        <NavBarIcon></NavBarIcon>
      </Div>
    </Nav>
  );
};
