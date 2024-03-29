import { ProductCard } from "./ProductCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getAllProduct } from "../store/features/product-slice";
import { styled } from "styled-components";



const Grid = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-auto-flow: column;
grid-gap: 1em;
width: 100%;
overflow: scroll;
`;


export const OurProductGrid = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product.our);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return (
    <Grid>
      {productState?.products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </Grid>
  );
};
