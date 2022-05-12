import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  padding-top: 0.5%;
  height: fit-content;
  justify-content: space-between;

  @media (max-width: 375px) {
    background-color: red;
  }
  @media (min-width: 430px) {
    background-color: blue;
  }
`;

export const HeaderH1 = styled.h1`
  padding-left: 1rem;
`;
