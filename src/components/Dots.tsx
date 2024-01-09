import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  to {
    opacity: 0.2;
    transform: translateY(-20px);
  }
`;

const DotsContainer = styled.div`
  list-style: none;
  display: flex;
  margin-top:16px;

`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin: 0 3px;
  background-color: white;
  animation: ${bounceAnimation} 1s infinite alternate;
`;

const SecondDot = styled(Dot)`
  animation-delay: 300ms;
`;

const ThirdDot = styled(Dot)`
  animation-delay: 600ms;
`;

const FourthDot = styled(Dot)`
  animation-delay: 900ms;
`;
const Dots = () => (
  <DotsContainer>
    <Dot />
    <SecondDot />
    <ThirdDot />
    <FourthDot />
  </DotsContainer>
);

export default Dots;
