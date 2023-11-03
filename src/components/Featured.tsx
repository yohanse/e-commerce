import styled from "styled-components"
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { FeaturedGrid } from "./FeaturedGrid";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
    width: 100%;
`;

export const Featured = () => {
  return (
    <Wrapper>
        <Title title="Featured"></Title>
        <SubTitle subTitle="New Arrival"></SubTitle>
        <FeaturedGrid></FeaturedGrid>
    </Wrapper>
  )
}
