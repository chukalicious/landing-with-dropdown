import styled from "styled-components";

export const drawerContainer = {
  display: "flex",
  flexDirection: "column",
  zIndex: "100",
  height: "100vh",
  cursor: "pointer",
  position: "fixed",
  left: "0",
  top: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  // keeps items to the right side if the screen
  alignItems: "flex-end",
};

// export const DrawerContainerDiv = styled.div`
// display: flex,
// flex-direction: column,
// z-index: 100,
// height: 100vh,
// cursor: pointer,
// position: fixed,
// left: 0,
// top: 0,
// right: 0,
// bottom: 0,
// background-color: "rgba(0, 0, 0, 0.8)",
// // keeps items to the right side if the screen
// align-items: flex-end,

// @media (max-width: 375px) {
//   // background-color: red;
//   display: none;

// }
// @media (min-width: 430px) {
//   background-color: blue;
//   flex-direction: row;
//   // display: none;
// }`;

export const x = {
  marginRight: "2rem",
  fontSize: "1.5rem",
  padding: "0",
};

export const xButton = {
  fontSize: "2rem",
  display: "flex",
  justifyContent: "flex-end",
};

export const liContainer = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  width: "70%",
  height: "100vh",
};

export const buttonsWrapper = {
  display: "flex",
  flexDirection: "column",
  margin: "1rem auto",
  width: "100%",
};

export const outerDrawerLi = {
  listStyle: "none",
  padding: ".5rem",
};

export const innerDrawerUl = {
  listStyle: "none",
  padding: ".5rem",
};
