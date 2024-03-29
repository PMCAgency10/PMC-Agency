import React from "react";
import {
  Button,
  Container,
  MainTittle,
  SmallText,
  SmallTittle,
} from "./styles";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function LeftSection({ setIsFormOpen }) {
  const navigate = useNavigate();
  return (
    <Container>
      <SmallTittle>Outcome driven</SmallTittle>
      <MainTittle>
        Your DTC Partner <br />
        For Digital
        <br />
        Success
      </MainTittle>
      <SmallText>
        We're omni-channel digital advertising growth <br />
        experts focused on outcome-based results
      </SmallText>
      {/* <Link to={"form"} smooth duration={1000} offset={-100}> */}
      <Button
        onClick={() => {
          navigate("/form");
        }}
      >
        Start Application
      </Button>
      {/* </Link> */}
    </Container>
  );
}
