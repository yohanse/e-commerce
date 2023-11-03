import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-image: url("https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg");
  padding: 2em 0 2em 3em;
  gap: 1em;
`;

const Title = styled.p`
  color: #00ff66;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const P = styled.p`
  color: #fafafa;
  margin-block-start: 0;
  margin-block-end: 0;
  font-family: Inter;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
`;

const Number = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const Date = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 11px;
  font-weight: 400;
  line-height: 18px;
`;

const Wrapper = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  text-align: center;
  border-radius: 50%;
  background-color: #fafafa;
  padding: 0.5em;
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  background-color: #00ff66;
  border-radius: 4px;
  padding: 1em 2em 1em 2em;
`;

const DivWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const PWrapper = styled.div``;

export const Add = () => {
  return (
    <Div>
      <Title>categories</Title>
      <PWrapper>
        <P>Enhance Your</P>
        <P>Music Experience</P>
      </PWrapper>
      <DivWrapper>
        <Wrapper>
          <Number>23</Number>
          <Date>Hours</Date>
        </Wrapper>
        <Wrapper>
          <Number>23</Number>
          <Date>Hours</Date>
        </Wrapper>
        <Wrapper>
          <Number>23</Number>
          <Date>Hours</Date>
        </Wrapper>
        <Wrapper>
          <Number>23</Number>
          <Date>Hours</Date>
        </Wrapper>
      </DivWrapper>
      <Button>But Now!</Button>
    </Div>
  );
};
