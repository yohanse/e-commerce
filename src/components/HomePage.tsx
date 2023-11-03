import styled from "styled-components";
import Header from "./Header";
import { NavBar } from "./NavBar";
import { Picture } from "./Picture";
import { Todays } from "./Todays";
import { Catagorie } from "./Catagorie";
import { ThisMonth } from "./ThisMonth";
import { Add } from "./Add";
import { OurProduct } from "./OurProduct";
import { Featured } from "./Featured";
import { HomeAbout } from "./HomeAbout";
import { Footer } from "./Footer";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2% 0 2%;
  gap: 7em;
`;



const HomePage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <RestWrapper>
        <Picture></Picture>
        <Todays></Todays>
        <Catagorie></Catagorie>
        <ThisMonth></ThisMonth>
        <Add></Add>
        <OurProduct></OurProduct>
        <Featured></Featured>
        <HomeAbout></HomeAbout>
      </RestWrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};

export default HomePage;
