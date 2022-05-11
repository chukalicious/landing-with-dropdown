import {
  xButton,
  liContainer,
  x,
  buttonsWrapper,
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
            <li>
              Features
              <ul>
                <li>To do</li>
                <li>Calendar</li>
                <li>Reminders</li>
                <li>Planing</li>
              </ul>
            </li>
          </div>
          <div>
            <li>
              Company
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </li>
          </div>
          <div>
            <li>Careers</li>
          </div>
          <div>
            <li>About</li>
          </div>
        </ul>
      </div>
      <div style={buttonsWrapper}>
        <button style={drawerButtons}>Login</button>
        <button style={drawerButtons}>Register</button>
      </div>
    </div>
  );
};

export default DrawerListItems;
