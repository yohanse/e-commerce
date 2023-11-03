import styled from "styled-components"
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { OurProductGrid } from "./OurProductGrid";
import { OurProductButton } from "./OurProductButton";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1em;
`;

export const OurProduct = () => {
  return (
    <Wrapper>
        <Title title="Our Products"></Title>
        <SubTitle subTitle="Explore Our Products"></SubTitle>
        <OurProductGrid></OurProductGrid>
        <OurProductButton></OurProductButton>
    </Wrapper>
  )
}
