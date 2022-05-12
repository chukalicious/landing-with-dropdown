import DrawerListItems from "./DrawerListItems";
import { DrawerContainerDiv } from "../../styles/drawer-styles";

const DrawerContainer = (props) => {
  const closeDrawer = () => {
    props.setOpenDrawer(false);
  };

  return (
    <div>
      <DrawerListItems closeDrawer={closeDrawer} />
    </div>
  );
};

export default DrawerContainer;
