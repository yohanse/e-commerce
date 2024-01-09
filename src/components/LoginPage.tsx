import styled from "styled-components";
import Header from "./Header";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/store";
import { userLogin } from "../store/features/login-slice";
import { useEffect } from "react";
import Dots from "./Dots";

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
  @media (max-width: 650px) {
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

const InputWrapper = styled.form`
  display: flex;
  align-items: strech;
  flex-direction: column;
  gap: 0.8em;
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
  height: 2.8em;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Error = styled.p`
  color: #db4444;
`;

const schema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

type LoginFromData = z.infer<typeof schema>;

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login);
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFromData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (loginState.status == "fulfilled"){
      console.log(loginState.auth?.access);
      console.log(loginState.auth?.refresh)
      navigation("/");
      return;
    }
  }, [loginState.status]);
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
          <InputWrapper
            onSubmit={handleSubmit((data) => dispatch(userLogin(data)))}
          >
            <Input {...register("username")} placeholder="User Name"></Input>
            {errors.username && <Error>{errors.username.message}</Error>}
            <Input {...register("password")} placeholder="Password"></Input>
            {errors.password && <Error>{errors.password.message}</Error>}
            {loginState.error && <Error>{loginState.error}</Error>}
            <LoginButton type="submit">{loginState.status == "pending" ? <Dots></Dots> : "Log In"}</LoginButton>
            <BottomTitle>Forget Password ?</BottomTitle>
          </InputWrapper>
        </Div>
      </RestWrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};

export default LoginPage;