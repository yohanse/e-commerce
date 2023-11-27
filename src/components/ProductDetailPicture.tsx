import { styled } from "styled-components";
import ProductDetailNote from "./ProductDetailNote";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 4fr;
  grid-template-rows: 80px 80px 80px 80px;
  grid-template-areas:
    "one five six"
    "two five six"
    "three five six"
    "four five six";
  row-gap: 0.8em;
  column-gap: 1em;
  :nth-child(1) {
    grid-area: one;
  }
  :nth-child(2) {
    grid-area: two;
  }
  :nth-child(3) {
    grid-area: three;
  }
  :nth-child(4) {
    grid-area: four;
  }
  :nth-child(5) {
    grid-area: five;
  }
  :nth-child(6) {
    grid-area: six;
  }
  @media (max-width: 764px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 300px 80px;
    grid-template-areas:
      "five five six six"
      "one two three four";

    row-gap: 10px;
    column-gap: 10px;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 300px 80px 300px;
    grid-template-areas:
      "five five five five"
      "one two three four"
      "six six six six";
    row-gap: 10px;
    column-gap: 10px;
  }
`;

const Picture = styled.div<{ $image: string }>`
  background-size: cover;
  background-image: url(${(props) => props.$image});
`;

const ProductDetailPicture = () => {
  return (
    <Wrapper>
      <Picture $image="https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg"></Picture>
      <Picture $image="https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg"></Picture>
      <Picture $image="https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg"></Picture>
      <Picture $image="https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg"></Picture>
      <Picture $image="https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg"></Picture>
      <ProductDetailNote></ProductDetailNote>
    </Wrapper>
  );
};

export default ProductDetailPicture;
