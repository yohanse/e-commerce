import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  color: #fafafa;
  background-color: #db4444;
  padding: 0.7em 1.4em 0.7em 1.4em;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  align-self: center;
`;

export const OurProductButton = () => {
  return <Button>View All Products</Button>;
};
