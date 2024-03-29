import React from "react";
import {
  BottomContainer,
  Container,
  ContentContainer,
  ContentText,
  ContentTitle,
  CopyRight,
  Image,
} from "./styles";
import imageSrc from "../../static/CU2.webp";
import logoSrc from "../../static/logo.webp";
import { CompanyName, Logo, LogoContainer } from "../intro/header/styles";
import useBreakpoint from "../../utilities/mediaQuery";

export default function ContactUs() {
  const isSmallScreen = useBreakpoint(770);
  return (
    <Container>
      <Image src={imageSrc} />
      <LogoContainer style={{ position: "absolute", top: "5%", left: "5%" }}>
        <Logo src={logoSrc} />
        <CompanyName>
          Pledge Media <br /> Consultancy
        </CompanyName>
      </LogoContainer>
      <BottomContainer>
        <ContentContainer>
          <ContentTitle>contact us</ContentTitle>
          <ContentText>
            (23) 456 7890
            <br /> hello@pmc.com
          </ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>our location</ContentTitle>
          <ContentText>Dubai</ContentText>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>follow us on IG & FB</ContentTitle>
          <ContentText>@pledgemediaconsultancy</ContentText>
        </ContentContainer>
        {!isSmallScreen && (
          <CopyRight>
            Privacy Policy | Terms of Service | Disclaimer | © 2024 Pledge Media
            Consultancy
          </CopyRight>
        )}
      </BottomContainer>
    </Container>
  );
}
