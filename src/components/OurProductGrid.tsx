import styled from "styled-components";
import { ThisMonthMaterialCard } from "./ThisMonthMaterialCard";

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr); 
  grid-auto-flow: column; 
  grid-gap: 1em;
  width: 100%;
  overflow: scroll;
`;

export const OurProductGrid = () => {
  return (
    <Grid>
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
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
      <ThisMonthMaterialCard></ThisMonthMaterialCard>
    </Grid>
  );
};
