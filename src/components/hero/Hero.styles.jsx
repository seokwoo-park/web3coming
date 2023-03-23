import styled from "styled-components";
export const StyledHero = styled.div`
  height: 100vh;
  scroll-snap-align: center;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const HeroContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroTexts = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
`;

export const HeroImages = styled.div`
  flex: 3;

  img {
    width: 400px;
    height: 300px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    inset: 0;

    animation: animate 2s infinite ease alternate;

    @keyframes animate {
      to {
        transform: translateY(20px);
      }
    }
  }
`;
