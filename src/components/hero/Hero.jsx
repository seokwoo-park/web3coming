import React from "react";
import {
  HeroContainer,
  HeroImages,
  HeroTexts,
  StyledHero,
} from "./Hero.styles";
import Navbar from "./navbar/Navbar";
import moonImg from "../../assets/moon.png";

const Hero = () => {
  return (
    <StyledHero>
      <Navbar />
      <HeroContainer>
        <HeroTexts>
          <h1>Future. Decentralize. Creative </h1>
          <h2>What we do</h2>
          <p>Build digital assets, Decentralized security, Creative Design</p>
          <button>LEARN MORE</button>
        </HeroTexts>
        <HeroImages>
          <img src={moonImg} />
        </HeroImages>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
