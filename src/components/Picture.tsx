import styled from "styled-components"
import { PictureAside } from "./PictureAside";
import { PictureMain } from "./PictureMain";


const Wrapper = styled.div`
    display: flex;
    align-items: start;
`;

export const Picture = () => {
  return (
    <Wrapper>
        <PictureAside></PictureAside>
        <PictureMain></PictureMain>
    </Wrapper>
  )
}
