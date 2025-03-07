import styled from "styled-components";
import { Footer } from "./Footer";
import Header from "./Header";
import { NavBar } from "./NavBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 2% 0 2%;
  gap: 2em;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  color: grey;
`;

const Strong = styled.strong``;

// const StoryWrapper = styled.div``;

// const Title = styled.p``;

// const Subtitle = styled.p``;

// const ImageStory = styled.div``;

// const NoteStoryWrapper = styled.div``;

// const MiddleWrapper = styled.div``;

// const PersonWrapper = styled.div``;

const AboutPage = () => {
  return (
    <HomeWrapper>
      <Header></Header>
      <NavBar></NavBar>
      <Wrapper>
        <P>
          Home / <Strong>About</Strong>
        </P>
      </Wrapper>
      <Footer></Footer>
    </HomeWrapper>
  );
};

export default AboutPage;
