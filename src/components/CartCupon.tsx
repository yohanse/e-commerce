import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  align-self: start;
`;
const Input = styled.input`
  box-sizing: content-box;
`;

const Button = styled.button`
  padding: 0.5em 1em;
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

const CartCupon = () => {
  return (
    <Wrapper>
      <Input placeholder="cupon code"></Input>
      <Button>Apply Cupon</Button>
    </Wrapper>
  );
};

export default CartCupon;
