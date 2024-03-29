import React from "react";
import { Button, Container, LargeText, SmallText, Text } from "./styles";
import { useNavigate } from "react-router-dom";

export default function LeftSection() {
  const navigate = useNavigate();
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
      <Button onClick={() => navigate("/form")}>Get Started</Button>
    </Container>
  );
}
