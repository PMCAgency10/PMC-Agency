import React from "react";
import {
  Body,
  Container,
  Divider,
  EffectsTop,
  EffectsBottom
} from "./styles";

import Header from "./header";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import effect from "../../static/s.svg";
import useBreakpoint from "../../utilities/mediaQuery"

export default function Intro() {
  const isSmallScreen = useBreakpoint(770);
  return (
    <Container>
      <EffectsTop src={effect} />
      <EffectsBottom src={effect} />
      <Header />
      {!isSmallScreen && <Divider />}
      <Body>
        <LeftSection />
        <RightSection />
      </Body>
      {/*<Wrapper>
        <ContentTitle>More statistics</ContentTitle>
        <StatisticsContainer>
          <ContentContainer>
            <ContentTitle style={{ marginLeft: !isSmallScreen && "40px" }}>
              Total ROI
            </ContentTitle>
            <Numbers style={{ marginLeft: !isSmallScreen && "40px" }}>
              $100,000+
            </Numbers>
            <Description
              style={{
                marginLeft: !isSmallScreen && "40px",
              }}
            >
              Returns on investment <br />
              for clients
            </Description>
            <Link
              to={"form"}
              smooth
              duration={1000}
              offset={-100}
              style={{ width: "50%" }}
            >
              <Button>Apply now</Button>
            </Link>
          </ContentContainer>
          <ContentContainer style={{ height: "50%", justifyContent: "center" }}>
            <Numbers style={{ alignSelf: "center" }}>$10,000+</Numbers>
            <Description style={{ alignSelf: "center" }}>
              Daily Ad spend
            </Description>
          </ContentContainer>
          <ContentContainer style={{ height: "50%", justifyContent: "center" }}>
            <Numbers style={{ alignSelf: "center" }}>15+</Numbers>
            <Description style={{ alignSelf: "center" }}>
              Clients Served
            </Description>
          </ContentContainer>
        </StatisticsContainer>
            </Wrapper>
      <BottomText>
        we've worked with industry
        <br /> leading brands.
      </BottomText>
      <BottomSmallText>
        In recognition of consistently generating exceptional client results.
      </BottomSmallText>*/}
    </Container>
  );
}
