import styled from "styled-components";
import { InputIncrease } from "./InputIncrease";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { getCart } from "../store/features/cart-slice";

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 30px;
`;

const Tr = styled.tr`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Td = styled.td`
  padding: 10px;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  height: 3em;
  width: 3em;
  background-image: url("https://t3.ftcdn.net/jpg/05/70/78/52/360_F_570785259_PbB3QtX7SmyxKMMmScfWGBGU4DvuUxeq.jpg");

  background-color: red;
`;

const P = styled.div``;

const RangeInput = styled.input``;

export const CartGrid = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  console.log(cart.error)
  return (
    <Table>
      <Tr>
        <Td>
          <P>Product</P>
        </Td>
        <Td>
          <P>Price</P>
        </Td>
        <Td>
          <P>Quantity</P>
        </Td>
        <Td>
          <P>Subtotal</P>
        </Td>
      </Tr>
      {cart.cart?.items.map((item) => (
        <Tr>
          <Td>
            <IconText>
              <Icon />
              <P>{item.product.title}</P>
            </IconText>
          </Td>
          <Td>
            <P>${item.product.unit_price}</P>
          </Td>
          <Td>
            <InputIncrease qauntity={item.quantity}/>
          </Td>
          <Td>
            <P>${item.total_price}</P>
          </Td>
        </Tr>
      ))}

      {/* <Tr>
        <Td>
          <IconText>
            <Icon />
            <P>LCD monitor</P>
          </IconText>
        </Td>
        <Td>
          <P>$650</P>
        </Td>
        <Td>
          <InputIncrease />
        </Td>
        <Td>
          <P>$650</P>
        </Td>
      </Tr> */}
    </Table>
  );
};
