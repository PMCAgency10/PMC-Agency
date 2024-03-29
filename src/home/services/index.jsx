import React from "react";
import { Container } from "./styles";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function Services({ setIsFormOpen }) {
  return (
    <Container id="services">
      <LeftSection setIsFormOpen={setIsFormOpen} />
      <RightSection />
    </Container>
  );
}
