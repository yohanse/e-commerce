import styled from "styled-components"
import { Logo } from "./Logo";
import { NavBarMiddle } from "./NavBarMiddle";
import { NavBarIcon } from "./NavBarIcon";

const Nav = styled.nav`

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid grey 1px;
  flex-wrap: wrap;
`;

export const NavBar = () => {
  return (
    <Nav>
      <Logo></Logo>
      <NavBarMiddle></NavBarMiddle>
      <NavBarIcon></NavBarIcon>
    </Nav>
  )
}
