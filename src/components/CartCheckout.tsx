import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;
  border: 1.5px grey solid;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hr = styled.hr`
height: 0.1px;
background-color: grey;
width: 100%;
`;

const Button = styled.button`
    padding: 1em 2em 1em 2em;
    align-self: center;
    box-sizing: content-box;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: white;
  background-color: #db4444;
  outline: none;
  border: none;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

const CartCheckout = () => {
  return (
    <Wrapper>
      <Title>Cart Total</Title>
      <Row1>
        <P>Subtotal:</P>
        <P>$1750</P>
      </Row1>
      <Hr></Hr>
      <Row1>
        <P>Shipping:</P>
        <P>Free</P>
      </Row1>
      <Hr></Hr>
      <Row1>
        <P>Total:</P>
        <P>$1750</P>
      </Row1>
      <Button>Procees to check out</Button>
    </Wrapper>
  );
};

export default CartCheckout;
