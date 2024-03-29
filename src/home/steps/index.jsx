import React from "react";
import { Container, Counter, Description, StepContainer, StepWrapper, Title, Wrapper,TitleContainer,Title1,Title2, Finally, Text1, Text2 } from "./styles";
import { useEffect } from "react";
import { useState } from "react";

export default function Steps({targetRef,inView}) {
    const[element1Display,setElement1Display] =useState(false)
    const[element2Display,setElement2Display] =useState(false)
    const[element3Display,setElement3Display] =useState(false)
    const[element4Display,setElement4Display] =useState(false)

    useEffect(()=>{
        setElement1Display(true)
        setTimeout(() => {
            setElement2Display(true)

        }, 200);
        setTimeout(() => {
            setElement3Display(true)

        }, 400);
        setTimeout(() => {
            setElement4Display(true)

        }, 600);
    },[])
  return (
    <>
    <TitleContainer>
        <Title1>WHAT IT LOOKS LIKE WORKING WITH </Title1>
        <Title2>US</Title2>

    </TitleContainer>
    
    <Container ref={targetRef}>
      {inView!==0 &&
      <Wrapper>
        <StepWrapper align={"flex-start"}>
          <StepContainer height={"85%"} display={element1Display} animate={"top"} index={1}>
            <Counter>1</Counter>
            <Title>APPLY NOW</Title>
            <Description>Begin by sharing your business information  about your business from the apply now page </Description>
          </StepContainer>
        </StepWrapper>
        <StepWrapper align={"flex-end"}>
          <StepContainer height={"60%"} display={element2Display} animate={"bottom"} index={2}>
          <Counter>2</Counter>
            <Title>Audit</Title>
            <Description>We will review your online presence and assess where you currently stand </Description>
          </StepContainer>
        </StepWrapper>
        <StepWrapper align={"flex-start"}>
          <StepContainer height={"80%"}  display={element3Display} animate={"top"} index={3}>
          <Counter>3</Counter>
            <Title>Initial Meeting</Title>
            <Description>We’ll reach out to you to talk about our objectives and understand if we’re a good fit.</Description>
          </StepContainer>
        </StepWrapper>
        <StepWrapper align={"flex-end"}>
          <StepContainer height={"85%"} display={element4Display} animate={"bottom"} index={4}>
          <Counter>4</Counter>
            <Title>Strategy Development </Title>
            <Description>We craft a customized plan to meet your business objectives within a specific timeframes.</Description>
          </StepContainer>
        </StepWrapper>
      </Wrapper>
}
    </Container>

    <Finally>
        <Text1>And Finally</Text1>
        <Text2>Walk through the strategy and discussing potential investment</Text2>

    </Finally>
    </>

  );
}
