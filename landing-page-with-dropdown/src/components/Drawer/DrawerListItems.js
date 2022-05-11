const DrawerListItems = (props) => {
  console.log("drawerlistitems: props:", props.closeDrawer);
  const closeDrawer = () => {
    props.closeDrawer();
  };
  return (
    <div>
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

export default DrawerListItems;
