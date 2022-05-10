import { drawerContainer } from "../../styles/drawer-styles";

const DrawerContainer = (props) => {
  const closeDrawer = () => {
    props.setOpenDrawer(false);
  };

  return (
    <div style={drawerContainer}>
      <div onClick={closeDrawer}>X</div>
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
      <button>Login</button>
      <button>Register</button>
    </div>
  );
};

export default DrawerContainer;
