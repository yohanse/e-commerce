import styled from "styled-components"
import { InputIncrease } from "./InputIncrease";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    place-items: center;
    row-gap: 3em;
`;

const IconText = styled.div`
    display: flex;
    gap: 2px;
`;

const Icon = styled.div`
    height: 3em;
    width: 3em;
    background-color: black;
`;

const P = styled.div``;

const RangeInput = styled.input``;



export const CartGrid = () => {
  return (
    <Grid>
        <P>Product</P>
        <P>Price</P>
        <P>Quantity</P>
        <P>Subtotal</P>

        <IconText>
            <Icon/>
            <P>LCD monitor</P>
        </IconText>
        <P>$650</P>
        <InputIncrease/>
        <P>$650</P>

        <IconText>
            <Icon/>
            <P>LCD monitor</P>
        </IconText>
        <P>$650</P>
        <InputIncrease/>
        <P>$650</P>

        <IconText>
            <Icon/>
            <P>LCD monitor</P>
        </IconText>
        <P>$650</P>
        <InputIncrease/>
        <P>$650</P>

    </Grid>
  )
}
