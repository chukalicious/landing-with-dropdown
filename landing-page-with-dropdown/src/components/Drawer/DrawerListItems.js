import {
  xButton,
  liContainer,
  x,
  buttonsWrapper,
  outerDrawerLi,
  innerDrawerUl,
} from "../../styles/drawer-styles";
import { drawerButtons } from "../../styles/button-styles";
import { useState } from "react";

const DrawerListItems = (props) => {
  console.log("DrawerListItems: props", props);

  const [openFeatures, setOpenFeatures] = useState(false);
  console.log("openFeatures", openFeatures);
  const [openCompany, setOpenCompany] = useState(false);

  const openNestedFeatures = () => {
    setOpenFeatures(!openFeatures);
  };

  const openNestedCompany = () => {
    setOpenCompany(!openCompany);
  };

  const closeDrawer = () => {
    props.closeDrawer();
  };
  return (
    <div style={liContainer}>
      <div onClick={closeDrawer} style={xButton}>
        <p style={x}>X</p>
      </div>
      <div>
        <ul>
          <div>
            <li onClick={openNestedFeatures} style={outerDrawerLi}>
              Features
              {openFeatures ? (
                <ul style={innerDrawerUl}>
                  <li style={outerDrawerLi}>To do</li>
                  <li style={outerDrawerLi}>Calendar</li>
                  <li style={outerDrawerLi}>Reminders</li>
                  <li style={outerDrawerLi}>Planing</li>
                </ul>
              ) : null}
            </li>
          </div>
          <div>
            <li onClick={openNestedCompany} style={outerDrawerLi}>
              Company
              {openCompany ? (
                <ul style={innerDrawerUl}>
                  <li style={outerDrawerLi}>History</li>
                  <li style={outerDrawerLi}>Our Team</li>
                  <li style={outerDrawerLi}>Blog</li>
                </ul>
              ) : null}
            </li>
          </div>
          <div>
            <li style={outerDrawerLi}>Careers</li>
          </div>
          <div>
            <li style={outerDrawerLi}>About</li>
          </div>
        </ul>
      </div>
      <div style={buttonsWrapper}>
        <div style={drawerButtons}>Login</div>
        <div style={drawerButtons}>Register</div>
      </div>
    </div>
  );
};

export default DrawerListItems;
