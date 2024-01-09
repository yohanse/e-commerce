import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getTodayProduct } from "../store/features/product-slice";
import { styled } from "styled-components";

const WrapperHorizontal = styled.div`
  display: flex;
  gap: 1em;
  overflow: scroll;
`;

export const TodaysFlex = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product.today);
  useEffect(() => {
    dispatch(getTodayProduct());
  }, []);

  return (
    <WrapperHorizontal>
      {productState?.products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </WrapperHorizontal>
  );
};
