// contains the ... company name? and the hamburger menu on the mobile
// in the web it contains the navigation
// so, this component definitely goes
import { StyledHeader, HeaderH1 } from "../styles/header-styles";
import { NavContainer } from "../styles/navStyles";
import HamMenu from "./HamMenu";

const Header = () => {
  return (
    <StyledHeader>
      <NavContainer>
        <HeaderH1>snap</HeaderH1>
      </NavContainer>
      <NavContainer>
        {" "}
        <HamMenu />
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
