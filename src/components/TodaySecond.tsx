import styled from "styled-components";
import { Date } from "./Date";
import { SubTitle } from "./SubTitle";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: end;
`;

const Colon = styled.p`
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0.04em;
  margin-block-start: 0;
  margin-block-end: 0;
  color: red;
`;

const MarginRight = styled.div`
  margin-right: 10em;
`;

export const TodaySecond = () => {
  return (
    <Wrapper>
      <MarginRight><SubTitle subTitle={"Flash Sales"}></SubTitle></MarginRight>
      <DateWrapper>
        <Date repr={"Day"} value={"03"}></Date>
        <Colon>:</Colon>
        <Date repr={"Hours"} value={"06"}></Date>
        <Colon>:</Colon>
        <Date repr={"Minutes"} value={"24"}></Date>
        <Colon>:</Colon>
        <Date repr={"Second"} value={"56"}></Date>
      </DateWrapper>
    </Wrapper>
  );
};
