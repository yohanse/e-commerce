import { styled } from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  color: #fafafa;
  background-color: #db4444;
  align-self: center;
  padding: 0.7em 1.2em 0.7em 1.2em;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;;
`;

export const TodaysButton = () => {
  return <Button>View All Products</Button>;
};
