import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getMonthProduct } from "../store/features/product-slice";
import { styled } from "styled-components";

const WrapperHorizontal = styled.div`
  display: flex;
  gap: 1em;
  overflow: scroll;
`;

export const ThisMonthFlex = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product.month);
  useEffect(() => {
    dispatch(getMonthProduct());
  }, []);

  return (
    <WrapperHorizontal>
      {productState?.products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </WrapperHorizontal>
  );
};
