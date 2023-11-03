import styled from "styled-components"
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { CatagorieMaterial } from "./CatagorieMaterial";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const Hr = styled.hr`
  height: 0.5px;
  color: grey;
  width: 100%;
`;

export const Catagorie = () => {
  return (
    <Wrapper>
        <Hr/>
        <Title title={"Catagories"}></Title>
        <SubTitle subTitle={"Browse By Catagory"}></SubTitle>
        <CatagorieMaterial></CatagorieMaterial>
        <Hr/>
    </Wrapper>
  )
}
