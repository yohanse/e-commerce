import styled from "styled-components"

const Image = styled.div`
    flex-grow: 1;
    height: 12em;
    margin: auto 0em;
    margin-left: 1em;
    box-sizing: border-box;
    background-image: url("https://media.wired.com/photos/5926bf18af95806129f507ef/191:100/w_1280,c_limit/iphone7.jpg");
    
`;

export const PictureMain = () => {
  return (
      <Image/>
  )
}
