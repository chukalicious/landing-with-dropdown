import DrawerListItems from "./DrawerListItems";
import { drawerContainer } from "../../styles/drawer-styles";

const DrawerContainer = (props) => {
  const closeDrawer = () => {
    props.setOpenDrawer(false);
  };

  return (
    <div style={drawerContainer}>
      <DrawerListItems closeDrawer={closeDrawer} />
    </div>
  );
};

export default DrawerContainer;
