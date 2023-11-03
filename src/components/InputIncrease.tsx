import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 0 6px 0 6px;
`;

const P = styled.p``;

const P2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputIncrease = () => {
  return (
    <Grid>
      <P>01</P>
      <P2>
        <P>&gt;</P>
        <P>&lt;</P>
      </P2>
    </Grid>
  );
};
