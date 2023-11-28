import styled from "styled-components";
import Header from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { IoLogoGoogle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestWrapper = styled.div`
  display: flex;
  padding: 3em 2%;
`;

const Image = styled.div`
  flex-grow: 1;
  background-size: cover;
  background-image: url("https://i.pinimg.com/564x/e2/4d/e0/e24de059cf8dd1e459d6bc4587698395.jpg");
  @media (max-width: 650px){
    display: none;
  }
`;

const Div = styled.div`
  padding: 8em 3em;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1.4em;
  margin: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-family: Inter;
  font-size: 36px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.04em;
  text-align: left;
`;

const Subtitle = styled.p`
  //styleName: Title/16PX Regular;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 4px 2px;
  border-bottom: 1px solid grey;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const LoginButton = styled.button`
  outline: none;
  border: none;
  padding: 0.5em 1.5em;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #fafafa;
  background-color: #db4444;
`;

const BottomTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #db4444;
`;

const LoginPage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <RestWrapper>
        <Image></Image>
        <Div>
          <TitleWrapper>
            <Title>Login in to Exclusive</Title>
            <Subtitle>Enter your details below</Subtitle>
          </TitleWrapper>
          <InputWrapper>
            <Input placeholder="Email or Phone Number"></Input>
            <Input placeholder="Password"></Input>
          </InputWrapper>
          <ButtonWrapper>
            <LoginButton>Log In</LoginButton>
            <BottomTitle>Forget Password ?</BottomTitle>
          </ButtonWrapper>
        </Div>
      </RestWrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};

export default LoginPage;
