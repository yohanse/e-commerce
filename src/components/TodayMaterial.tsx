import styled from "styled-components"
import { TodayMaterialCard } from "./TodayMaterialCard";

const  Wrapper = styled.div`
    display: flex;
    gap: 1em;
    overflow: scroll;
`;

export const TodayMaterial = () => {
  return (
    <Wrapper>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
        <TodayMaterialCard></TodayMaterialCard>
    </Wrapper>
  )
}
