import imageHeroMobile from "../images/imageHeroMobile.png";
import { HeroContainer, heroImg } from "../styles/hero-styles";

const Hero = () => {
  const heroMobileImg = imageHeroMobile;
  return (
    <HeroContainer>
      <img alt="hero" style={heroImg} src={heroMobileImg} />
    </HeroContainer>
  );
};

export default Hero;
