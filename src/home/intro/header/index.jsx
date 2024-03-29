import React from "react";
import {
  Button,
  CompanyName,
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
  MenuItem,
} from "./styles";

import {DividerHeader} from "../styles";

import logoSrc from "../../../static/logo.webp";
import useBreakpoint from "../../../utilities/mediaQuery";
import { Link } from "react-scroll";

export default function Header() {
 
  const isSmallScreen = useBreakpoint(770);

  return (
    <Container>
      <LogoContainer>
        <Logo src={logoSrc} />
        <CompanyName>
          Pledge Media <br /> Consultancy
        </CompanyName>
      </LogoContainer>
      

      <MenuContainer>
        <Link to={"services"} smooth duration={1000} offset={-100}>
          <MenuItem>About</MenuItem>
        </Link>
        <Link to={"case-studies"} smooth duration={1000} offset={-100}>
          <MenuItem>Latest studies</MenuItem>
        </Link>
        <Link to={"form"} smooth duration={1000} offset={-100}>
          <Button>Apply Now</Button>
        </Link>
      </MenuContainer>
    </Container>
  );
}
