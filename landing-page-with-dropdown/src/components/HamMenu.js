import iconMenu from "../images/iconMenu.svg";
import { hamburgerStyle } from "../styles/hamburgerMenuStyles";
import { useState } from "react";

const HamMenu = () => {
  // in this component I intend to control the open and closed states for the drawer, if it makes sense
  //   The open state is set as false. when clicked on, it turns to the opposite on whatever in set on the state

  const [openDrawer, setOpenDrawer] = useState(false);

  const controlDrawer = (e) => {
    setOpenDrawer(!openDrawer);
  };
  console.log(openDrawer);
  return (
    <div style={hamburgerStyle}>
      <img
        onClick={controlDrawer}
        src={iconMenu}
        alt="menu"
        style={{ width: "45%", paddingLeft: "2.9rem" }}
      />
    </div>
  );
};

export default HamMenu;
