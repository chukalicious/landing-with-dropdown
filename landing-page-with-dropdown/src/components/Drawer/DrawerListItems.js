import {
  xButton,
  liContainer,
  x,
  buttonsWrapper,
  outerDrawerLi,
  innerDrawerUl,
} from "../../styles/drawer-styles";
import { drawerButtons } from "../../styles/button-styles";

const DrawerListItems = (props) => {
  console.log("drawerlistitems: props:", props.closeDrawer);
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
            <li style={outerDrawerLi}>
              Features
              <ul style={innerDrawerUl}>
                <li style={outerDrawerLi}>To do</li>
                <li style={outerDrawerLi}>Calendar</li>
                <li style={outerDrawerLi}>Reminders</li>
                <li style={outerDrawerLi}>Planing</li>
              </ul>
            </li>
          </div>
          <div>
            <li style={outerDrawerLi}>
              Company
              <ul style={innerDrawerUl}>
                <li style={outerDrawerLi}>History</li>
                <li style={outerDrawerLi}>Our Team</li>
                <li style={outerDrawerLi}>Blog</li>
              </ul>
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
