import styled from "styled-components"
import { Title } from "./Title";
import { TodaySecond } from "./TodaySecond";
import { TodaysButton } from "./TodaysButton";
import { TodaysFlex } from "./TodaysFlex";

const WrapperTodays = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const Todays = () => {
  return (
    <WrapperTodays>
        <Title title={"Today`s"}></Title>
        <TodaySecond></TodaySecond>
        <TodaysFlex></TodaysFlex>
        <TodaysButton></TodaysButton>
    </WrapperTodays>
  )
}
