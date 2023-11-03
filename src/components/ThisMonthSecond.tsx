import styled from "styled-components"
import { SubTitle } from "./SubTitle";
import { ThisMonthButton } from "./ThisMonthButton";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ThisMonthSecond = () => {
  return (
    <Wrapper>
        <SubTitle subTitle="Best Selling Products"></SubTitle>
        <ThisMonthButton></ThisMonthButton>
    </Wrapper>
  )
}
