import iconMenu from "../images/iconMenu.svg";
import { hamburgerStyle, imgStyle } from "../styles/hamburgerMenuStyles";
import DrawerContainer from "./Drawer/DrawerContainer";
import { useState } from "react";

const HamMenu = () => {
  // in this component I intend to control the open and closed states for the drawer, if it makes sense
  //   The open state is set as false. when clicked on, it turns to the opposite on whatever in set on the state

  const [openDrawer, setOpenDrawer] = useState(false);

  const slideOpen = () => {
    setOpenDrawer(true);
  };

  return (
    <div>
      {openDrawer === false ? (
        <div style={hamburgerStyle}>
          <img onClick={slideOpen} src={iconMenu} alt="menu" style={imgStyle} />
        </div>
      ) : (
        <DrawerContainer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )}
    </div>
  );
};
export default HamMenu;
