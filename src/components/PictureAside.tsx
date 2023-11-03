import styled from "styled-components";

const Flex = styled.div`
  padding: 1em 4em 0em 0em;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: solid grey 1px;
  align-items: start;
`;

const P = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  //styleName: Title/16PX Regular;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const PictureAside = () => {
  const notes = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <Flex>
      {notes.map((note, index) => (
        <P key={index}>{note}</P>
      ))}
    </Flex>
  );
};
