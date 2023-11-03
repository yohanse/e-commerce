import styled from "styled-components"
import { ThisMonthMaterialCard } from "./ThisMonthMaterialCard";


const  Wrapper = styled.div`
    display: flex;
    gap: 1em;
    overflow: scroll;
`;

export const ThisMonthMaterial = () => {
  return (
    <Wrapper>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
        <ThisMonthMaterialCard></ThisMonthMaterialCard>
    </Wrapper>
  )
}
