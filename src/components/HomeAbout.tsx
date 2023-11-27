import styled from "styled-components"
import { HomeAboutCard } from "./HomeAboutCard";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 669px){
      flex-direction: column;
      gap: 1rem;
    }
`;

export const HomeAbout = () => {
  return (
    <Wrapper>
        <HomeAboutCard></HomeAboutCard>
        <HomeAboutCard></HomeAboutCard>
        <HomeAboutCard></HomeAboutCard>
    </Wrapper>
  )
}
