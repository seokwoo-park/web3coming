import styled from "styled-components";

export const StyledNavbar = styled.header`
  display: flex;
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  li {
    padding: 1rem;
    cursor: pointer;

    :hover {
      box-shadow: 0 0 0 1px #fff inset;
      transition: 0.5s all ease-in;
    }
  }
`;
