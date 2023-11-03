import styled from "styled-components"
import { Title } from "./Title";
import { ThisMonthSecond } from "./ThisMonthSecond";
import { ThisMonthMaterial } from "./ThisMonthMaterial";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const ThisMonth = () => {
  return (
    <Wrapper>
        <Title title="This Month"></Title>
        <ThisMonthSecond></ThisMonthSecond>
        <ThisMonthMaterial></ThisMonthMaterial>
    </Wrapper>
  )
}
