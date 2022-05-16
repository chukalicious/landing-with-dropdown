import DrawerListItems from "./DrawerListItems";
import { DrawerContainerDiv } from "../../styles/drawer-styles";
import { drawerContainer } from "../../styles/drawer-styles";

const DrawerContainer = (props) => {
  const closeDrawer = () => {
    props.setOpenDrawer(false);
  };

  return (
    <div style={drawerContainer}>
      {/* <div> */}
      <DrawerListItems closeDrawer={closeDrawer} />
    </div>
    // </div>
  );
};

export default DrawerContainer;
