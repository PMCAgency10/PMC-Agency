import React from "react";
import { Button, Container, LargeText, SmallText, Text } from "./styles";
import { Link } from "react-scroll";

export default function LeftSection({ setIsFormOpen }) {
  return (
    <Container>
      <SmallText>our services</SmallText>
      <LargeText>
        Maximize Your
        <br />
        Reach, Generate
        <br /> More Sales.
      </LargeText>
      <Text>
        Our tailored approach to brand success means better <br />
        clicks, higher quality traffic, scroll-stopping ads, better
        <br /> ROAS and ultimately... more profit.
      </Text>
      {/* <Link to={"form"} smooth duration={1000} offset={-100}> */}
      <Button onClick={() => setIsFormOpen(true)}>Get Started</Button>
      {/* </Link> */}
    </Container>
  );
}
