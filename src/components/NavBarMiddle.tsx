import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style: none;
  display: flex;
  gap: 2em;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1em;
  }
`;

const Li = styled.li`
  position: relative;
  cursor: pointer;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: grey;
    bottom: 0;
    left: 0;
    transform: scale(0, 1);
    transform-origin: 0 100%;
    transition: transform 0.5s ease;
  }

  &:hover::after {
    transform: scale(1, 1);
  }
`;

export const NavBarMiddle = () => {
  const navigation = useNavigate();
  return (
    <Ul>
      <Li
        onClick={() => {
          navigation("/");
        }}
      >
        Home
      </Li>
      <Li>Contact</Li>
      <Li>About</Li>
      <Li>Sign Up</Li>
    </Ul>
  );
};
