import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
  margin: auto;
  min-height: 83vh;

  @media (max-width: 375px) {
    // background-color: red;
  }
  @media (min-width: 430px) {
    // background-color: blue;
  }
`;

export const h2Styles = {
  fontWeight: "700",
};

export const h3Styles = {
  textAlign: "justify",
  fontWeight: "500",
};

export const textArea = {
  display: "flex",
  width: "90%",
  margin: "auto",
  justifyContent: "center",
};
