import styled from "styled-components"
import { Title } from "./Title";
import { TodaySecond } from "./TodaySecond";
import { TodayMaterial } from "./TodayMaterial";
import { TodaysButton } from "./TodaysButton";

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
        <TodayMaterial></TodayMaterial>
        <TodaysButton></TodaysButton>
    </WrapperTodays>
  )
}
