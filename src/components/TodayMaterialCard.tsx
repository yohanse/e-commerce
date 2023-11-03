import styled from "styled-components";
import { AiOutlineHeart, AiOutlineEye, AiFillStar } from "react-icons/ai";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ImageCard = styled.div`
  height: 11em;
  width: 11em;
  background-size: cover;
  position: relative;
  background-image: url("https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg");
  border-radius: 1em;
`;

const CostCard = styled.p`
  background-color: #db4444;
  color: white;
  border-radius: 3px;
  padding: 0.2em 0.5em 0.2em 0.5em;
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  left: 5%;
  top: 5%;
`;

const CardIcon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 80%;
  top: 5%;
`;

const Name = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const Price = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #DB4444;
  margin-right: 1em;
`;

const PricePrev = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: relative;
  &::before{
    position: absolute;
    background-color: grey;
    content: "";
    height: 2px;
    width: 100%;
    top: 50%;

  }
`;

const StarWrapper = styled.div`
  display: flex;
`;

interface Props {
  percent: number;
  name: String;
  price: number;
  previousPrice: number;
}

export const TodayMaterialCard = () => {
  return (
    <Card>
      <ImageCard>
        <CostCard>-40%</CostCard>
        <CardIcon>
          <AiOutlineHeart size={25} color={"white"} />
          <AiOutlineEye size={25} color={"white"} />
        </CardIcon>
      </ImageCard>
      <Name>Iphone mobile</Name>
      <PriceWrapper>
        <Price>$460</Price>
        <PricePrev>$590</PricePrev>
      </PriceWrapper>
      <StarWrapper>
        <AiFillStar size={25} color={"#FFD700"} />
        <AiFillStar size={25} color={"#FFD700"} />
        <AiFillStar size={25} color={"#FFD700"} />
        <AiFillStar size={25} color={"#FFD700"} />
        <AiFillStar size={25} color={"grey"} />
      </StarWrapper>
    </Card>
  );
};
