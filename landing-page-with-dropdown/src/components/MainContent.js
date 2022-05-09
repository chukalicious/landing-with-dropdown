import Hero from "./Hero";
import SubTitle from "./SubTitle";
import Title from "./Title";
import { MainDiv } from "../styles/main-content-styles";
import { ActionButton } from "../styles/button-styles";

const MainContent = () => {
  return (
    <MainDiv>
      <Hero />
      <Title />
      <SubTitle />
      <ActionButton>Learn more</ActionButton>
    </MainDiv>
  );
};

export default MainContent;
