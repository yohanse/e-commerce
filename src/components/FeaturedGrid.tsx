import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 10em 10em;
  grid-template-columns: 49% 24% 24%;
  grid-column-gap: 1.5%;
  grid-row-gap: 1em;
`;

const Image1 = styled.div`
  grid-row: span 2;
  background-size: cover;
  background-image: url("https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg");
`;

const Image2 = styled.div`
background-size: cover;
  grid-column: span 2;
  background-image: url("https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg");
`;

const Image3 = styled.div`
background-size: cover;
  background-image: url("https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg");
`;

const Image4 = styled.div`
background-size: cover;
  background-image: url("https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg");
`;

export const FeaturedGrid = () => {
  return (
    <Grid>
      <Image1></Image1>
      <Image2></Image2>
      <Image3></Image3>
      <Image4></Image4>
    </Grid>
  );
};
