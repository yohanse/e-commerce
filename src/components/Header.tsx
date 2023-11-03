import styled from "styled-components"

const HeaderWrapper = styled.header`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em 1em 0;
`;

const P = styled.p`
  color: #FAFAFA;
  display: inline-block;
  margin: auto;
  overflow: hidden;
  height: 1.2em;
`;

const Select = styled.select`
  border: none;
  outline: none;
  background-color: #000000;
  color: #FAFAFA;
`;

const A = styled.a`
  color: #FAFAFA;
`;

const Option = styled.option``;

const Header = () => {
  return (
    <HeaderWrapper>
        <P>Summmer Sale For All Swim Suitd And Free Express Delivery - OFF 50%! <A href=""> ShopNow</A></P>
        <Select>
          <Option value="">English</Option>
          <Option value="">Amharic</Option>
        </Select>
    </HeaderWrapper>
  )
}

export default Header