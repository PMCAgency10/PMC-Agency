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

import logoSrc from "../../../static/logo.webp";
import useBreakpoint from "../../../utilities/mediaQuery";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const isSmallScreen = useBreakpoint(770);
  const navigate = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <Logo src={logoSrc} />
        {!isSmallScreen && (
          <CompanyName>
            Pledge Media <br /> Consultancy
          </CompanyName>
        )}
      </LogoContainer>

      <MenuContainer>
        <Link to={"services"} smooth duration={1000} offset={-100}>
          <MenuItem>About</MenuItem>
        </Link>
        <Link to={"case-studies"} smooth duration={1000} offset={-100}>
          <MenuItem>Latest studies</MenuItem>
        </Link>
        <Button
          onClick={() => {
            navigate("/form");
          }}
        >
          Apply Now
        </Button>
      </MenuContainer>
    </Container>
  );
}
