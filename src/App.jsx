import React from "react";
import styled from "styled-components";
import { Contact, Hero, Who, Works } from "./components";

const App = () => {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  padding: 0 2rem;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;

  color: #fff;
  background: linear-gradient(
    -75deg,
    #1e1e1e,
    #223a5e,
    #5a5a5a,
    #0c0c0c,
    #351c4d,
    #4717f6
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  scrollbar-width: none;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
    width: 0;
  }
`;

export default App;
