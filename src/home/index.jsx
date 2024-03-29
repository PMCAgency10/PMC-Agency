import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import Intro from "./intro";
import Services from "./services";
import CaseStudies from "./case-studies";
import ContactUs from "./contact-us";
import Form from "./form";
import Steps from "./steps";

export default function Home() {
  const stepsRef = useRef(null);
  const [stepsInView, setStepsInView] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting && setStepsInView(stepsInView+1) 
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);
  return (
    <Container>
      <Intro />
      <Services />
      <Steps  targetRef={stepsRef} inView={stepsInView} />
      <ContactUs />
      <Form />
    </Container>
  );
}
