import Hero from "./Hero";
import SubTitle from "./SubTitle";
import Title from "./Title";
import { MainDiv } from "../styles/main-content-styles";

const MainContent = () => {
  return (
    <MainDiv>
      <Hero />
      <Title />
      <SubTitle />
      <button>Learn more</button>
    </MainDiv>
  );
};

export default MainContent;
