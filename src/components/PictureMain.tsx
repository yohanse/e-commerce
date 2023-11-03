import styled from "styled-components"

const WrapperImage = styled.div`
`;

const Image = styled.img`
    object-fit: cover;
    flex-grow: 1;
    height: 12em;
    align-self: center;
    padding: 0 2em 0 2em;

`;

export const PictureMain = () => {
  return (
      <Image src={"https://media.wired.com/photos/5926bf18af95806129f507ef/191:100/w_1280,c_limit/iphone7.jpg"}/>
    
  )
}
