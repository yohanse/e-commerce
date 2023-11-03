import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5em;
`;

const Sp = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Lp = styled.p`
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.04em;

  margin-block-start: 0;
  margin-block-end: 0;
`;

interface Props {
  repr: String;
  value: String;
}

export const Date = ({ repr, value }: Props) => {
  return (
    <Div>
      <Sp>{repr}</Sp>
      <Lp>{value}</Lp>
    </Div>
  );
};
